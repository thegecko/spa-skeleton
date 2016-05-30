import AjaxCreator from './ajaxCreator';

const apiKey = "60mH9LzwMcTnFih1wTF6SRTAv91jGjekmJWtciR6";

class NasaCreator extends AjaxCreator {

    constructor(type) {
        super(type, "https://api.nasa.gov/");
    }

    getUrl(param) {
        var url = super.getUrl(param);
        return url + "&api_key=" + apiKey;
    }
}

export default NasaCreator;