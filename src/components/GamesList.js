import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import Message from './messages/Message'

const GamesList = ({games, toggleFeatured, toggleDesc, editGame }) => (
    <div className="ui four cards">
        {
            games.length === 0 ? (
                <Message
                    header="There is no game in collection"
                    content="Should add some new?"
                    type="info"
                />
            ) : (
                games.map(game => <GameCard editGame={editGame} toggleDesc={toggleDesc} toggleFeatured={toggleFeatured} key={game._id} game={game}/>)
            )}

    </div>
);
GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    toggleDesc: PropTypes.func.isRequired,
    editGame: PropTypes.func.isRequired
};

GamesList.defaultProps ={
    games: []
};
export default GamesList;