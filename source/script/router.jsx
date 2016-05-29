import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Main from '../layout/container';
import Home from '../features/home/container';
import Neo from '../features/neo/container';
import Apod from '../features/apod/container';

import appReducer from './reducers';

const store = createStore(appReducer, initialState);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(appHistory, store);

const NotFound = React.createClass({
    render() {
        return <h2>Not found</h2>;
    }
});

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="neo" component={Neo} />
                <Route path="apod" component={Apod} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("main")
);