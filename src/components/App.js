import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from "./GamesList";


const games= [
    {
        _id: 1,
        featured: true,
        price: 3299 ,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'quadropolis',
        players: "2-4",
        duration: 20,

    },
    {
        _id: 2,
        featured: false,
        price: 2299 ,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Heroes',
        players: "2",
        duration: 60,

    },
    {
        _id: 3,
        featured: false,
        price: 3399 ,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Red Alert',
        players: "1",
        duration: 80,

    }

];



class App extends React.Component {
    state= {
        games: []
    };

    componentDidMount() {
        this.setState({ games: this.sortGames(games)})
    }

    sortGames = games => {
       return _orderBy(games, ['featured','name'],['desc', 'asc']);
    };

    toggleFeatured = gameId => {
        this.setState({
            games: this.sortGames(
                this.state.games.map(
                    game =>
                        gameId === game._id ? {...game, featured: !game.featured } : game
                )
            )
        })
        // const newGames = this.state.games.map(game => {
        //     if (game._id === gameId) return {...game, featured: !game.featured }
        //     return game;
        // });
        // this.setState({games: this.sortGames(newGames)});
    };

    render(){
        return (
            <div className="ui container">
                <GamesList games={this.state.games} toggleFeatured={this.toggleFeatured}/>
            </div>
        );
    }
}

export default App;

