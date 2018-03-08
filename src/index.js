import React from 'react';
import { render } from 'react-dom';
import "semantic-ui/dist/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);