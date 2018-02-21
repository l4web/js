import React from 'react';

class GameForm extends React.Component {
    state={
        name: '',
        description: '',
        price: 0,
        duration: 0,
        players: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    handleStringChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    };
    handleNumberChange = e => {
        this.setState({ [e.target.name]: parseInt(e.target.value, 10)})
    };

    render(){
        return (
            <form  className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Game title</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="text"
                        placeholder="Full game title"
                        value = {this.state.name}
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="description">Game description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="text"
                        placeholder="Game description"
                        value = {this.state.description}
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="three fields">
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="text"
                            value = {this.state.price}
                            onChange={this.handleNumberChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="duration">Duration (in min) </label>
                        <input
                            type="number"
                            id="duration"
                            name="duration"
                            className="text"
                            value = {this.state.duration}
                            onChange={this.handleNumberChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="players">Players </label>
                        <input
                            type="text"
                            id="players"
                            name="players"
                            className="text"
                            placeholder="Full game title"
                            value = {this.state.players}
                            onChange={this.handleStringChange}
                        />
                    </div>
                </div>
                <button className="button ui" type="submit">
                    Create
                </button>
            </form>
        );
    }
}

export default GameForm;