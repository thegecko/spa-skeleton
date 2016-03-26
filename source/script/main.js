import 'script!jquery';
import 'script!foundation-sites';

import '../style/main.scss';
import './router';

import React from 'react';
import {render} from 'react-dom';

import MenuComponent from '../components/menu.jsx';
import NeoCollection from '../collections/neo';

render(<MenuComponent/>, document.getElementById('menu'));
NeoCollection.fetch();

$(function() {
	$(document).foundation();
});