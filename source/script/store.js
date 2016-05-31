import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { reducer as neo } from '../features/neo/api';
import { reducer as apod } from '../features/apod/api';

// All Reducers
const rootReducer = combineReducers({
    neo,
    apod,
    routing: routerReducer
});

// Store
const initialState = undefined;
const store = createStore(rootReducer, applyMiddleware(thunk), initialState);

export default store;