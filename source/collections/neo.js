import Backbone from 'backbone';
import {getUrl} from '../script/settings';
import NeoModel from '../models/neo';

class NeoCollection extends Backbone.Collection {
	get model() { return NeoModel; }
	get url() { return getUrl("neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08"); }

    parse(response) {
        return response.near_earth_objects["2015-09-08"];
    }
}

export default new NeoCollection();