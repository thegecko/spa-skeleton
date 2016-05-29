import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import neo from '../features/neo/reducer';
import apod from '../features/apod/reducer';

const appReducer = combineReducers({
    neo,
    apod,
    routerReducer
});

export default appReducer;