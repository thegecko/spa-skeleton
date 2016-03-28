import 'script!jquery';
import 'script!foundation-sites';

import '../style/main.scss';
import './router';

import MenuController from '../controllers/menu';
new MenuController('menu').render();

$(function() {
	$(document).foundation();
});