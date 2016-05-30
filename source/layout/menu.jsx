import React from 'react';
import { Link, IndexLink } from 'react-router';

var MenuComponent = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="title-bar" data-responsive-toggle="realEstateMenu" data-hide-for="small">
                    <button className="menu-icon" type="button" data-toggle></button>
                    <div className="title-bar-title">Menu</div>
                </div>
                <div className="top-bar" id="realEstateMenu">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text">NASA</li>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/neo">Near-Earth Objects</Link></li>
                            <li><Link to="/apod">Picture of the day</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default MenuComponent;