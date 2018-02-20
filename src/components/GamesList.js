import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import Message from './messages/Message'

const GamesList = ({games, toggleFeatured}) => (
    <div className="ui four cards">
        {
            games.length === 0 ? (
                <Message

                />
            ) : (
                games.map(game => <GameCard toggleFeatured={toggleFeatured} key={game._id} game={game}/>)
            )}

    </div>
);
GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleFeatured: PropTypes.func.isRequired
};

GamesList.defaultProps ={
    games: []
};
export default GamesList;