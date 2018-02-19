import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';

const GamesList  = ({games}) => (
    <div className="ui four cards">
        {games.map(game => <GameCard key={game._id} game={game}/>)}
    </div>
);
GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default GamesList;