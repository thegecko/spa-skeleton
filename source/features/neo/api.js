import NasaCreator from '../../creators/nasaCreator';

const creator = new NasaCreator("neo");
const getAction = creator.createAction("neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08");
const reducer = creator.createReducer(function(data) {
    return data.near_earth_objects["2015-09-08"];
});

export {
    getAction,
    reducer
};