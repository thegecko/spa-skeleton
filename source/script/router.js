import React from 'react';

import Backbone from 'backbone';
import {render} from 'react-dom';

import Home from '../components/home.jsx';
import Neo from '../components/neo.jsx';
import Picture from '../components/potd.jsx';

var appElement = document.getElementById("app");

var Router = Backbone.Router.extend({
	routes: {
		"(/)": "home",
		"neo": "neo",
		"potd": "potd",
		"*action": "defaultRoute"
	},
	home: function() {
		render(<Home/>, appElement);
	},
	neo: function() {
		render(<Neo />, appElement);
	},
	potd: function() {
		render(<Picture />, appElement);
	},
	defaultRoute: function(other) {
		console.log('Invalid. You attempted to reach:' + other);
	}
});

export default Router;