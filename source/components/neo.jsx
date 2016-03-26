import React from 'react';
import backboneReact from 'backbone-react-component';

var NeoComponent = React.createClass({
    mixins: [ backboneReact ],
    propTypes: {
        collection: React.PropTypes.object
    },
    render: function() {
        var neos = this.props.collection;
        return (
            <div>
                <h1>Near-Earth Objects</h1>
                <ul>{neos.map(function(neo) {
                    return (
                        <li key={neo.attributes.neo_reference_id}>
                            <a href={neo.attributes.nasa_jpl_url}>{neo.attributes.name}</a>
                        </li>
                    );
                })}</ul>
            </div>
        );
    }
});

export default NeoComponent;