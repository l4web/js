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
        this.setState({ games: _orderBy(games, ['featured','name'],['desc', 'asc'])})
    }

    render(){
        return (
            <div className="ui container">
                <GamesList games={this.state.games} />
            </div>
        );
    }
}

export default App;

