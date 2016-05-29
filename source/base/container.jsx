import React from 'react';

class BaseController extends React.Component {
    get markup() { return <null />; }
    get models() { return []; }

    render() {
        return this.markup;
    }

    componentDidMount() {
        var models = this.models;
        if (!Array.isArray(models)) models = [models];

        if (models.length) {
            models.forEach(model => {
                model.fetch();
            });
        }
    }
}

export default BaseController;