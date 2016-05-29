import React from 'react';
import backboneReact from 'backbone-react-component';
import Menu from './menu';

var MainComponent = React.createClass({
    mixins: [ backboneReact ],
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