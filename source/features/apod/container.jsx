import React from 'react';
import BaseController from './base';
import ApodComponent from '../components/apod';
import ApodModel from '../models/apod';

class ApodController extends BaseController {
    get markup() { return <ApodComponent model={ApodModel} />; }
    get models() { return ApodModel; }
}

export default ApodController;