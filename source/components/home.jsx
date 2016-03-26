import React from 'react';
import backboneReact from 'backbone-react-component';

var HomeComponent = React.createClass({
    mixins: [ backboneReact ],
    render: function() {
        return (
            <div>
                <h1>Welcome to NASA</h1>
                <p>Try viewing some <a href="#/neo">near-earth objects</a> or checkout the <a href="#/apod">picture of the day</a>.</p>
            </div>
        );
    }
});

export default HomeComponent