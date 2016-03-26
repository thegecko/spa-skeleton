import React from 'react';

import Backbone from 'backbone';
import {render} from 'react-dom';

import HomeComponent from '../components/home.jsx';
import NeoComponent from '../components/neo.jsx';
import ApodComponent from '../components/apod.jsx';

import ApodModel from '../models/apod';
import NeoCollection from '../collections/neo';

var appElement = document.getElementById("app");

class Router extends Backbone.Router {

	get routes() {
		return {
			"(/)": "home",
			"neo": "neo",
			"apod": "apod",
			"*action": "defaultRoute"
		};
	}

	home() {
		render(<HomeComponent />, appElement);
	}

	neo() {
		render(<NeoComponent collection={NeoCollection} />, appElement);
		NeoCollection.fetch();
	}

	apod() {
		render(<ApodComponent model={ApodModel} />, appElement);
		ApodModel.fetch();
	}

	defaultRoute(other) {
		console.log('Invalid. You attempted to reach:' + other);
	}
}

new Router();
Backbone.history.start();