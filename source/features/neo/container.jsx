import React from 'react';
import BaseController from './base';
import NeoComponent from '../components/neo';
import NeoCollection from '../collections/neo';

class NeoController extends BaseController {
    get markup() { return <NeoComponent collection={NeoCollection} />; }
    get models() { return NeoCollection; }
}

export default NeoController;