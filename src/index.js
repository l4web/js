import React from 'react';
import { render } from 'react-dom';
import "semantic-ui/dist/semantic.min.css";
import GameCard from './components/GameCard';

const games= [
    {
        price: '32,99',
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'quadropolis',
        players: "2-4",
        duration: "60",

    },
    {
        price: '22,99',
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Heroes',
        players: "2",
        duration: "60",

    },
    {
        price: '32,99',
        thumbnail: 'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
        name: 'Red Alert',
        players: "1",
        duration: "60",

    }

];

render(<GameCard game={games[1]}/>, document.getElementById('root'));