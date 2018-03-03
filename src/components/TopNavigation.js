import React from 'react';
import PropTypes from 'prop-types';
const TopNavigation  = ({showGameForm, showPublishers}) => (
    <div>
        <div className="ui secondary pointing menu">
            <a href="/" className="item">BGShop</a>
            <a className="item" onClick={showGameForm} ><i className="icon plus"/>Add New Game
            </a>
            <a className="item" onClick={showPublishers} ><i className="icon edit"/>Manage publishers
            </a>
        </div>
    </div>
);

TopNavigation.propTypes = {
    showGameForm: PropTypes.func.isRequired,
    showPublishers: PropTypes.func.isRequired
};

export default TopNavigation;