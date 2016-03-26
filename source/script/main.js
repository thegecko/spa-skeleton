import 'script!jquery';
import 'script!foundation-sites';

import '../style/main.scss';
import './router';

import React from 'react';
import {render} from 'react-dom';

import MenuComponent from '../components/menu.jsx';

render(<MenuComponent/>, document.getElementById('menu'));

$(function() {
	$(document).foundation();
});