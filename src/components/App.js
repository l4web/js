import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNacigation from "./TopNavigation";
import _find from 'lodash/find';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import PublishersList from "./PublishersList";
import api from '../api';

class App extends React.Component {
    state = {
        games: [],
        publishers: [],
        showGameForm: false,
        showPublishers: false,
        selectedGame: {},
        sideBar: false,
        loading: true
    };

    componentDidMount() {
        api.games.fetchAll()
            .then(games => this.setState({games: this.sortGames(games), loading: false}));
        api.publishers.fetchAll()
            .then(publishers => this.setState({publishers: publishers }));
    }

    sortGames = games => {
        return _orderBy(games, ['featured', 'name'], ['desc', 'asc']);
    };

    toggleDesc = isDesc => {
        this.setState({
            games: this.state.games.map(
                game =>
                    isDesc === game._id ? {...game, isDesc: !game.isDesc} : game
            )
        })
    };
    saveGame = game => game._id ? this.updateGame(game) : this.addGame(game);

    addGame = gameData =>
        api.games.create(gameData).then(game =>
            this.setState({
                games: this.sortGames([...this.state.games, game]),
                showGameForm: false
            })
        );


    updateGame =  gameData =>
        api.games.update(gameData)
            .then(game =>
                this.setState({
                    games: this.sortGames(
                        this.state.games.map(item => item._id === game._id ? game : item)
                    ),
                    showGameForm: false
                })
            );


    deleteGame = game =>
    api.games.delete(game).then(() =>
        this.setState({
            games: this.state.games.filter(item => item._id !== game._id)
        })
    );


    toggleFeatured = gameId => {
        const game = _find(this.state.games, {_id: gameId});
        return this.updateGame({
            ...game,
            featured: !game.featured
        });
        // this.setState({
        //     games: this.sortGames(
        //         this.state.games.map(
        //             game =>
        //                 gameId === game._id ? {...game, featured: !game.featured} : game
        //         )
        //     )
        // })
        // const newGames = this.state.games.map(game => {
        //     if (game._id === gameId) return {...game, featured: !game.featured }
        //     return game;
        // });
        // this.setState({games: this.sortGames(newGames)});
    };
    showPublishers = () => this.setState({showPublishers: true, showGameForm: false,});
    hidePublishers = () => this.setState({showPublishers: false});

    deletePublisher = publisher =>
        api.publishers.delete(publisher).then(() =>
            this.setState({
                publishers: this.state.publishers.filter(item => item._id !== publisher._id)
            })
        );

    savePublisher = publisherData => publisherData._id ? this.updatePublisher(publisherData) : this.addPublisher(publisherData);

    addPublisher = publisherData =>
        api.publishers.create(publisherData).then( publisher =>
            this.setState({
                publishers: [...this.state.publishers , publisher],
                showPublisherForm: false
            } )
        );

    updatePublisher = publisherData =>
        api.publishers.update(publisherData)
            .then(publisher =>
                this.setState({
                    publishers: this.state.publishers.map(item => item._id === publisher._id ? publisher : item),
                    showPublisherForm: false
                })
            );

    showGameForm = () => this.setState({showGameForm: true, showPublishers: false, selectedGame: {} });
    hideGameForm = () => this.setState({showGameForm: false, selectedGame: {} });
    selectGameForEditing = game => this.setState({selectedGame: game, showGameForm: true, showPublishers: false,});

    render() {
        let numberOfColumns = 'sixteen';
        let columnToShow = 'four';
        if(this.state.showGameForm || this.state.showPublishers){
            numberOfColumns = 'ten';
            columnToShow = 'three';
        }

        return (
            <div className="ui container">
                <TopNacigation showPublishers={this.showPublishers} showGameForm={this.showGameForm}/>
                <div className="ui stackable grid">
                    {this.state.showGameForm &&(
                    <div className="six wide column">
                        <GameForm
                            submit={this.saveGame}
                            hideGameForm={this.hideGameForm}
                            publishers={this.state.publishers}
                            game={this.state.selectedGame}
                        />
                    </div>)}
                    <div className={`${numberOfColumns} wide column`}>

                        {
                            this.state.loading ? (
                                <div className="ui icon message">
                                    <i className="circle loading icon"></i>
                                    <div className="content">
                                        <div className="header">Wait a second!</div>
                                        <p>Loading game collection</p>
                                    </div>
                                </div>
                            ): (
                                <GamesList
                                    columnToShow={columnToShow}
                                    games={this.state.games}
                                    toggleDesc={this.toggleDesc}
                                    toggleFeatured={this.toggleFeatured}
                                    editGame={this.selectGameForEditing}
                                    deleteGame={this.deleteGame}

                                />
                            )
                        }

                    </div>

                    {

                        this.state.showPublishers &&
                        <div  className="six wide column">
                            <PublishersList
                                savePublisher={this.savePublisher}
                                deletePublisher={this.deletePublisher}
                                publishers={this.state.publishers}
                                hidePublishersList={this.hidePublishers}
                            />
                        </div>

                    }
                </div>


            </div>
        );
    }
}

export default App;

