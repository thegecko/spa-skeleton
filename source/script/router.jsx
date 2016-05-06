import React from 'react';
import {render} from 'react-dom';
import {createHashHistory} from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';

import MainController from '../controllers/main';
import HomeController from '../controllers/home';
import NeoController from '../controllers/neo';
import ApodController from '../controllers/apod';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const NotFound = React.createClass({
    render() {
        return <h2>Not found</h2>;
    }
});

render((
	<Router history={appHistory}>
        <Route path="/" component={MainController}>
            <IndexRoute component={HomeController} />
            <Route path="neo" component={NeoController} />
            <Route path="apod" component={ApodController} />
            <Route path="*" component={NotFound} />
        </Route>
	</Router>
), document.getElementById("main"));