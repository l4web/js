import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';

const GamesList = ({games}) => (
    <div className="ui four cards">
        {
            games.length === 0 ? (
                <div className="ui icon message">
                    <i className="icon info"/>
                        <div className="content">
                            <div className="header">There are no game in your store</div>
                            <p>You should add some</p>
                        </div>

                </div>
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
}
export default GamesList;