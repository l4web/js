import React from 'react';
import {NavLink} from "react-router-dom";
const TopNavigation  = () => (
    <div>
        <div className="ui secondary pointing menu">
            <NavLink exact to="/" href="/" className="item">BGShop</NavLink>
            <NavLink exact to="/games" className="item"  > Games </NavLink>
            <NavLink exact to="/games/new" className="item" ><i className="icon plus"/>Add New Game </NavLink>
            <NavLink exact to="/publishers" className="item" ><i className="icon edit"/>Manage publishers  </NavLink>
        </div>
    </div>
);

export default TopNavigation;