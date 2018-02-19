import React from 'react';
import GamesList from "./GamesList";


const games= [
    {
        _id: 1,
        price: 3299 ,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'quadropolis',
        players: "2-4",
        duration: 20,

    },
    {
        _id: 2,
        price: 2299 ,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Heroes',
        players: "2",
        duration: 60,

    },
    {
        _id: 3,
        price: 3399 ,
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Red Alert',
        players: "1",
        duration: 80,

    }

];

const App  = (props) => (
    <div className="ui container">
        <GamesList games={games} />
    </div>
);

export default App;