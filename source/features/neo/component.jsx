import React from 'react';

var NeoComponent = React.createClass({

    propTypes: {
        data: React.PropTypes.array
    },

    render: function() {
        var neos = this.props.data;
        return (
            <div>
                <h1>Near-Earth Objects</h1>
                <ul>{neos.map(function(neo) {
                    return (
                        <li key={neo.neo_reference_id}>
                            <a href={neo.nasa_jpl_url}>{neo.name}</a>
                        </li>
                    );
                })}</ul>
            </div>
        );
    }
});

export default NeoComponent;