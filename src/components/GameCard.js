import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';
import Message from './messages/Message'

const GameCard  = ({game, toggleFeatured, toggleDesc }) => (
    <div className="ui card">

            {game.isDesc ? (
                    <Message
                    header="Description"
                    content={game.desc}
                    type="info"
                    />
                   ) :
                (
                    <div className="image">
                    <span className="ui green ribbon label">$<Price cents={game.price}/></span>
                    <Featured featured={game.featured} id={game._id} toggleFeatured={toggleFeatured}/>
                    <img
                        src={game.thumbnail}
                        alt="Game Cover"
                    />
                    </div>
                )
            }


        <div className="content">
            <a href="#" className="header">{game.name}</a>
            <div className="meta a">
                <i className="icon users"/>{game.players}&nbsp;
                <i className="icon wait"/> {game.duration}
                { game.isDesc ? (
                    <i onClick={() => toggleDesc(game._id)} style={{float: 'right'}} className="eye icon green large right "/>
                ):(
                    <i onClick={() => toggleDesc(game._id)} style={{float: 'right'}} className="eye icon large right "/>
                )}

            </div>
        </div>
    </div>
);

GameCard.propTypes = {
    game: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
        desc: PropTypes.string.isRequired,
        isDesc: PropTypes.bool.isRequired
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    toggleDesc: PropTypes.func.isRequired
};

export default GameCard;