import 'script!jquery';
import 'script!foundation-sites';
import '../style/main.scss';

import Backbone from 'backbone';
import React from 'react';
import {render} from 'react-dom';

import Router from './router';
import Menu from '../components/menu.jsx';

new Router();
Backbone.history.start();
render(<Menu/>, document.getElementById('menu'));

$(function() {
	$(document).foundation();
});