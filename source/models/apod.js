import Backbone from 'backbone';
import {getUrl} from '../script/settings';

class ApodModel extends Backbone.Model {
	get url() { return getUrl("planetary/apod?"); }
}

export default new ApodModel();