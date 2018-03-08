import React from 'react';
import { render } from 'react-dom';
import "semantic-ui/dist/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import GameCard from './components/GameCard';


render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);