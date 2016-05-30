import React from 'react';
import { connect } from 'react-redux';
import NeoComponent from './component';
import { getAction } from './api';

var NeoContainer = React.createClass({

    propTypes: {
        dispatch: React.PropTypes.func.isRequired,
        isLoading: React.PropTypes.bool.isRequired,
        isLoaded: React.PropTypes.bool.isRequired,
        data: React.PropTypes.array
    },

    getInitialState: function() {
        return {
            data: []
        };
    },

    componentDidMount: function() {
        this.props.dispatch(getAction);
    },

    componentWillReceiveProps(nextProps) {
        if(!this.props.isLoaded && nextProps.isLoaded) {
            this.setState({
                data: nextProps.data
            });
        }
    },

    render: function() {
        return <NeoComponent data={this.state.data} />;
    }
});

function mapStateToProps(state) {
    return state.neo;
}

export default connect(
    mapStateToProps
)(NeoContainer);