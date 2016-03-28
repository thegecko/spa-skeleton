import Backbone from 'backbone';

var appElement = document.getElementById("app");

import HomeController from '../controllers/home';
var home = new HomeController(appElement);

import NeoController from '../controllers/neo';
var neo = new NeoController(appElement);

import ApodController from '../controllers/apod';
var apod = new ApodController(appElement);

class Router extends Backbone.Router {
	get routes() {
		return {
			"(/)": route => home.render(route),
			"neo": route => neo.render(route),
			"apod": route => apod.render(route),
			"*action": function(other) {
				console.log('Invalid. You attempted to reach:' + other);
			}
		};
	}
}

new Router();
Backbone.history.start();