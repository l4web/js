import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';


const GameCard  = ({game}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">$<Price cents={game.price}/></span>
            <img
            src={game.thumbnail}
            alt="Game Cover"
            />
        </div>
        <div className="content">
            <a href="#" className="header">{game.name}</a>
            <div className="meta">
                <i className="icon users"/>{game.players}&nbsp;
                <i className="icon wait"/> {game.duration}
            </div>
        </div>
    </div>
);

GameCard.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }).isRequired
};

export default GameCard;