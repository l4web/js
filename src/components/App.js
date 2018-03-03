import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNacigation from "./TopNavigation";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import PublishersList from "./PublishersList";
import api from '../api';

const publishers = [
    {
        _id: 1,
        name: "Days of wonder",
        website: ''
    },
    {
        _id: 2,
        name: "Rio Grande games",
        website: ''
    },
    {
        _id: 3,
        name: "Pcq Quote",
        website: ''
    }

];

// const games = [
//     {
//         _id: 1,
//         featured: true,
//         publisher: 1,
//         price: 3299,
//         thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
//         name: 'quadropolis',
//         players: "2-4",
//         duration: 20,
//         desc: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore maiores ullam!',
//         isDesc: true
//
//     },
//     {
//         _id: 2,
//         featured: false,
//         publisher: 1,
//         price: 2299,
//         thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
//         name: 'Heroes',
//         players: "2",
//         duration: 60,
//         desc: 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore maiores ullam!',
//         isDesc: false
//
//     },
//     {
//         _id: 3,
//         featured: false,
//         publisher: 2,
//         price: 3399,
//         thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
//         name: 'Red Alert',
//         players: "1",
//         duration: 80,
//         desc: 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore maiores ullam!',
//         isDesc: false
//
//     }
//
// ];


class App extends React.Component {
    state = {
        games: [],
        publishers: [],
        showGameForm: false,
        showPublishers: false,
        selectedGame: {},
        sideBar: false
    };

    componentDidMount() {
        api.games.fetchAll()
            .then(games => this.setState({games: this.sortGames(games)}))
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
    saveGame = game => {
        game._id ? this.updateGame(game) : this.addGame(game)
    };
    addGame = game => this.setState({
        games: this.sortGames([
            ...this.state.games,
            {
                ...game,
                _id: this.state.games.length +1
            }
        ]),
        showGameForm: false
    });

    updateGame =  game => this.setState({
        games: this.sortGames(this.state.games.map(item => item._id === game._id ? game : item)),
        showGameForm: false
    });
    deleteGame = game => this.setState({
        games : this.state.games.filter(item => item._id !== game._id)
    });

    toggleFeatured = gameId => {
        this.setState({
            games: this.sortGames(
                this.state.games.map(
                    game =>
                        gameId === game._id ? {...game, featured: !game.featured} : game
                )
            )
        })
        // const newGames = this.state.games.map(game => {
        //     if (game._id === gameId) return {...game, featured: !game.featured }
        //     return game;
        // });
        // this.setState({games: this.sortGames(newGames)});
    };
    showPublishers = () => this.setState({showPublishers: true, showGameForm: false,});
    hidePublishers = () => this.setState({showPublishers: false});

    deletePublisher = publisher => this.setState({
        publishers : this.state.publishers.filter(item => item._id !== publisher._id)
    });
    savePublisher = publisher => publisher._id ? this.updatePublisher(publisher) : this.addPublisher(publisher);
    addPublisher = publisher => this.setState({
        publishers: [
        ...this.state.publishers, {
                ...publisher,
                _id: this.state.publishers.length +1
            }
        ]
    });
    updatePublisher = publisher => this.setState({
        publishers: this.state.publishers.map(item => item._id === publisher._id ? publisher : item)
    });

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
                            publishers={publishers}
                            game={this.state.selectedGame}
                        />
                    </div>)}
                    <div className={ numberOfColumns + " wide column"}>
                        <GamesList
                            columnToShow={columnToShow}
                            games={this.state.games}
                            toggleDesc={this.toggleDesc}
                            toggleFeatured={this.toggleFeatured}
                            editGame={this.selectGameForEditing}
                            deleteGame={this.deleteGame}

                        />
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

