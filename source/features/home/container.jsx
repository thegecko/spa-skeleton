import React from 'react';
import BaseController from './base';
import HomeComponent from '../components/home';

class HomeController extends BaseController {
    get markup() { return <HomeComponent />; }
}

export default HomeController;