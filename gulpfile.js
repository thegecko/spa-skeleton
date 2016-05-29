var gulp = require("gulp");
var gutil = require("gulp-util");
var eslint = require("gulp-eslint");
var mocha = require("gulp-spawn-mocha");
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var WebpackServer = require("webpack-dev-server");
var WebpackExtract = require("extract-text-webpack-plugin");

var sourceDir = "source";
var outputDir = "dist";
var bundleDir = "/bundles";
var testsDir = "tests";

var devPort = "8080";

var jsFiles = [
    sourceDir + "/**/*.js",
    sourceDir + "/**/*.jsx"
];

var mochaConfig = {
    require: "babel-core/register",
    reporter: "mochawesome",
    reporterOptions: "reportDir=results,reportName=index,inlineAssets=true"
};

var webpackConfig = {
    cache: false,
    debug: false,
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".scss"]
    },
    entry: {
        main: ["./" + sourceDir + "/script/main.js"]
    },
    output: {
        path: __dirname + outputDir,
        filename: "[name].js",
    },
    module: {
        loaders: [
            {
                test:   /\.html/,
                loader: "html",
                include: __dirname + "/" + sourceDir
            },
            {
                test:   /\.js|\.jsx/,
                loader: "babel",
                include: __dirname + "/" + sourceDir
            },
            {
                test:   /\.css|\.scss/,
                loader: WebpackExtract.extract("style", "css!sass"),
                include: __dirname + "/" + sourceDir
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&name=[name].[ext]" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
            { test: /\.(ico|jpe?g|png|gif)$/, loader: "file" }
        ]
    },
    plugins: [
        new WebpackExtract("[name].css")
    ]
};

gulp.task("lint", function() {
    return gulp.src(jsFiles)
    .pipe(eslint(".eslintrc"))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("test", ["lint"], function () {
    return gulp.src(testsDir + "/**/*.js", { read: false })
    .pipe(mocha(mochaConfig));
});

gulp.task("build", ["test"], function() {
    return gulp.src(jsFiles)
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(outputDir + bundleDir));
});

gulp.task("serve", ["test"], function(callback) {

    var devServer = "localhost";
    var devURL = "http://" + devServer + ":" + devPort + "/";

    webpackConfig.cache = true;
    webpackConfig.debug = true;
    webpackConfig.devtool = "source-map";
    webpackConfig.entry.main.unshift("webpack-dev-server/client?" + devURL);

    new WebpackServer(webpack(webpackConfig), {
        contentBase : outputDir,
        publicPath: bundleDir
    })
    .listen(devPort, devServer, function(err) {
        gutil.log("[webpack-dev-server]", devURL);
    });
});

gulp.task("default", ["serve"]);