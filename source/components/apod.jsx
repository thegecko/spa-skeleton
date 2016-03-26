import React from 'react';
import backboneReact from 'backbone-react-component';

var ApodComponent = React.createClass({
    mixins: [ backboneReact ],
    propTypes: {
        model: React.PropTypes.object
    },
    render: function() {
        return (
            <div>
                <h1>Picture of the Day</h1>
                <p>{this.props.model.attributes.title}</p>
                <img src={this.props.model.attributes.url} />
            </div>
        );
    }
});

export default ApodComponent;