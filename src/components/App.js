import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNacigation from "./TopNavigation";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const publishers = [
    {
        _id: 1,
        name: "Days of wonder"
    },
    {
        _id: 2,
        name: "Rio Grande games"
    },
    {
        _id: 3,
        name: "Pcq Quote"
    }

];

const games = [
    {
        _id: 1,
        featured: true,
        publisher: 1,
        price: 3299,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'quadropolis',
        players: "2-4",
        duration: 20,
        desc: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore maiores ullam!',
        isDesc: true

    },
    {
        _id: 2,
        featured: false,
        publisher: 1,
        price: 2299,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Heroes',
        players: "2",
        duration: 60,
        desc: 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore maiores ullam!',
        isDesc: false

    },
    {
        _id: 3,
        featured: false,
        publisher: 2,
        price: 3399,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Red Alert',
        players: "1",
        duration: 80,
        desc: 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore maiores ullam!',
        isDesc: false

    }

];


class App extends React.Component {
    state = {
        games: [],
        showGameForm: false,
        selectedGame: {}
    };

    componentDidMount() {
        this.setState({games: this.sortGames(games)})
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
    addGame = game => this.setState({
        games: this.sortGames([
            ...this.state.games,
            {
                ...game,
                _id: this.state.games.length +1
            }
        ]),
        showGameForm: false
    })

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

    showGameForm = () => this.setState({showGameForm: true});
    hideGameForm = () => this.setState({showGameForm: false});
    selectGameForEditing = game => this.setState({selectedGame: game, showGameForm: true});

    render() {
        const numberOfColumns = this.state.showGameForm ? 'ten' : 'sixteen';
        return (
            <div className="ui container">
                <TopNacigation showGameForm={this.showGameForm}/>
                <div className="ui stackable grid">
                    {this.state.showGameForm &&(
                    <div className="six wide column">
                        <GameForm
                            submit={this.addGame}
                            hideGameForm={this.hideGameForm}
                            publishers={publishers}
                            game={this.state.selectedGame}
                        />
                    </div>)}
                    <div className={ numberOfColumns + " wide column"}>
                        <GamesList
                            games={this.state.games}
                            toggleDesc={this.toggleDesc}
                            toggleFeatured={this.toggleFeatured}
                            editGame={this.selectGameForEditing}

                        />
                    </div>
                </div>
                <LoginForm/>
                <SignupForm/>
            </div>
        );
    }
}

export default App;

