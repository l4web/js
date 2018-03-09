import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamesPage from './GamesPage'
import TopNavigation from "./TopNavigation";
import ShowGamePage from "../pages/ShowGamePage";

class App extends Component {

    render(){
        return (
            <div className="ui container">
                <TopNavigation />
                <Route path="/" exact component ={HomePage} />
                <Route path="/games" component ={GamesPage} />
                <Route path="/game/:_id" exact component ={ShowGamePage} />
            </div>
        )
    }
}
export default App;