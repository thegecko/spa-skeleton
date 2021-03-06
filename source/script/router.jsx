import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Store
import store from './store';

// Containers
import Main from '../layout/main';
import Home from '../features/home/component';
import Neo from '../features/neo/container';
import Apod from '../features/apod/container';

// History
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(appHistory, store);

// Default Route
const NotFound = React.createClass({
    render() {
        return <h2>Not found</h2>;
    }
});

// Routes
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