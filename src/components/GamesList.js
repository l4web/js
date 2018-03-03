import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import Message from './messages/Message'

const GamesList = ({games, toggleFeatured, toggleDesc, editGame , deleteGame , columnToShow}) => (
    <div className={'ui cards '+ columnToShow}>
        {
            games.length === 0 ? (
                <Message
                    header="There is no game in collection"
                    content="Should add some new?"
                    type="info"
                />
            ) : (
                games.map(game => <GameCard
                    editGame={editGame}
                    deleteGame={deleteGame}
                    toggleDesc={toggleDesc}
                    toggleFeatured={toggleFeatured}
                    key={game._id}
                    game={game}/>)
            )}

    </div>
);
GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    toggleDesc: PropTypes.func.isRequired,
    editGame: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired,
    columnToShow: PropTypes.string
};

GamesList.defaultProps ={
    games: [],
    columnToShow : 4
};
export default GamesList;