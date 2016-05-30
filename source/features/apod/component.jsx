import React from 'react';

var ApodComponent = React.createClass({

    propTypes: {
        data: React.PropTypes.object
    },

    render: function() {
        return (
            <div>
                <h1>Picture of the Day</h1>
                <p>{this.props.data.title}</p>
                <img src={this.props.data.url} />
            </div>
        );
    }
});

export default ApodComponent;