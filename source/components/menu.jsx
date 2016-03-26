import React from 'react';

class Menu extends React.Component {
    render() {
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#/neo">Near-earth objects</a></li>
                            <li><a href="#/potd">Picture of the day</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;