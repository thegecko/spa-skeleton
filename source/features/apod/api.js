import NasaCreator from '../../creators/nasaCreator';

const creator = new NasaCreator("apod");
const getAction = creator.createAction("planetary/apod?");
const reducer = creator.createReducer();

export {
    getAction,
    reducer
};