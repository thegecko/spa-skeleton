import React from 'react';
import Menu from './menu';

var MainComponent = React.createClass({
    propTypes: {
        children: React.PropTypes.object
    },
    render: function() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        );
    }
});

export default MainComponent;