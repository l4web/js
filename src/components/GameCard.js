import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Featured from './Featured';
import Message from './messages/Message'

class GameCard extends React.Component {
    state = {
        showConfirmation : false
    };
    showConfirmation = () => this.setState({showConfirmation: true});
    hideConfirmation = () => this.setState({showConfirmation:false});

    render() {
        const {game, toggleFeatured, toggleDesc, editGame, deleteGame} = this.props;
        return(
    <div className="ui card" data={game._id}>

        {game.isDesc ? (
                <Message
                    header="Description"
                    content={game.description}
                    type="info"
                />
            ) :
            (
                <div className="image" >
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
                {game.isDesc ? (
                    <i onClick={() => toggleDesc(game._id)} style={{float: 'right'}}
                       className="eye icon green large right "/>
                ) : (
                    <i onClick={() => toggleDesc(game._id)} style={{float: 'right'}} className="eye icon large right "/>
                )}

            </div>
        </div>
        <div className="extra content">
            {
                this.state.showConfirmation ? (
                    <div>
                    <h4>Shure 'bout that ? </h4>
                    <div className="ui two buttons">
                        <a className="ui red basic button" onClick={() => deleteGame(game)}>
                            <i className="ui icon checkmark"/> YES
                        </a>
                        <a className="ui grey basic button" onClick={this.hideConfirmation}>
                            <i className="ui icon close"/> NO
                        </a>
                    </div>
                    </div>
                ) : (
                    <div className="ui two buttons">
                        <a className="ui green basic button" onClick={() => editGame(game)}>
                            <i className="ui icon edit"></i>
                        </a>
                        <a className="ui red basic button" onClick={this.showConfirmation}>
                            <i className="ui icon trash"></i>
                        </a>
                    </div>
                )
            }

        </div>
    </div>
        )}
};

GameCard.propTypes = {
    game: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
        isDesc: PropTypes.bool
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    toggleDesc: PropTypes.func.isRequired,
    editGame: PropTypes.func.isRequired,
    deleteGame : PropTypes.func.isRequired
};

export default GameCard;