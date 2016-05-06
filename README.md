# SPA Skeleton

[![Circle CI](https://circleci.com/gh/thegecko/spa-skeleton.svg?style=shield)](https://circleci.com/gh/thegecko/spa-skeleton/)
[![Builds](https://img.shields.io/badge/SPA--Skeleton-builds-blue.svg)](http://thegecko.github.io/spa-skeleton/builds/)
[![Staging](https://img.shields.io/badge/SPA--Skeleton-staging-blue.svg)](http://thegecko.github.io/spa-skeleton/)

Single-Page Application Skeleton

## Architecture

### Development

* package manager: [npm](https://www.npmjs.com/)
* task runner: [gulp](http://gulpjs.com/)
* es2015 transpiler: [babel](http://babeljs.io/)
* module loader: [webpack](https://webpack.github.io/)

### MVC

* models + ajax: [backbone.js](http://backbonejs.org/) + [jQuery](https://jquery.com/)
* views: [react](https://facebook.github.io/react/)
* controllers: [react controllers](http://blog.andrewray.me/the-reactjs-controller-view-pattern/)
* routing: [react-router](https://github.com/reactjs/react-router)
* glue: [backbone-react-component](http://magalhas.github.io/backbone-react-component/)

## Styling

* layout: [foundation-sites](http://foundation.zurb.com/)
* css pre-processor: [sass](http://sass-lang.com/)

### Testing

* linting: [eslint](http://eslint.org/)
* runner: [mocha](https://mochajs.org/) + [chai](http://chaijs.com/)
* reporter: [mochawesome](http://adamgruber.github.io/mochawesome/)

### Deployment

* continuous integration: [circleci](https://circleci.com/gh/thegecko/spa-skeleton)
* staging server: [gh-pages](https://thegecko.github.io/spa-skeleton/)

## Prerequisites

[Node.js](https://nodejs.org/) which includes ```npm```.

```gulp``` installed globally by running:

```bash
> npm install -g gulp
```

## Installing

After cloning this repository, install the npm dependencies:

```bash
> npm install
```

### Development

Simply use the default ```gulp``` task to lint the code, run tests and start a live-reloading web-server:

```bash
> gulp
```

### Building

Use the ```build``` ```gulp``` task to lint the code, run tests and create a production-ready package in the ```dist``` folder:

```bash
> gulp build
```

### Staging

Successful ```CircleCI``` builds are automatically deployed to [gh-pages](https://thegecko.github.io/spa-skeleton/)
