import React from 'react';
import BaseController from './base';
import MainComponent from '../components/main';

class MainController extends BaseController {
    get markup() { return <MainComponent>{this.props.children}</MainComponent>; }
}

export default MainController;