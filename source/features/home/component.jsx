import React from 'react';
import {Link} from 'react-router';

var HomeComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcome to NASA</h1>
                <p>Try viewing some <Link to="/neo">near-earth objects</Link> or checkout the <Link to="/apod">picture of the day</Link>.</p>
            </div>
        );
    }
});

export default HomeComponent;