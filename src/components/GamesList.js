import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import Message from './messages/Message'

const GamesList = ({games}) => (
    <div className="ui four cards">
        {
            games.length === 0 ? (
                <Message

                />
            ) : (
                games.map(game => <GameCard key={game._id} game={game}/>)
            )}

    </div>
);
GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GamesList.defaultProps ={
    games: []
};
export default GamesList;