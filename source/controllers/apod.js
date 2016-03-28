import React from 'react';

import BaseController from './base';
import ApodComponent from '../components/apod.jsx';
import ApodModel from '../models/apod';

class ApodController extends BaseController {
    get markup() { return <ApodComponent model={ApodModel} />; }

    render() {
        super.render();
        ApodModel.fetch();
    }
}

export default ApodController;