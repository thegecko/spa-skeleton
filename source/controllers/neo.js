import React from 'react';

import BaseController from './base';
import NeoComponent from '../components/neo.jsx';
import NeoCollection from '../collections/neo';

class NeoController extends BaseController {
    get markup() { return <NeoComponent collection={NeoCollection} />; }

    render() {
        super.render();
        NeoCollection.fetch();
    }
}

export default NeoController;