import React from 'react';
import {render} from 'react-dom';

class BaseController {
    get markup() { return <this.component />; }

    constructor(element, component) {
        if (typeof element === "string") {
            element = document.getElementById(element);
        }
        this.element = element;
        this.component = component;
    }

    render() {
        render(this.markup, this.element);
    }
}

export default BaseController;