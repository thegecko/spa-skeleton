import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as neo } from '../features/neo/api';
import { reducer as apod } from '../features/apod/api';

const appReducer = combineReducers({
    neo,
    apod,
    routing: routerReducer
});

export default appReducer;