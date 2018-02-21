import React from 'react';

class GameForm extends React.Component {
    state={
        name: '',
        description: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log({
            title: this.name.value
        })
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

    render(){
        return (
            <form  className="ui form" onSubmit={this.handeSubmit}>
                <div className="field">
                    <label htmlFor="name">Game title</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="text"
                        placeholder="Full game title"
                        value = {this.state.name}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </div>
                <button className="button ui" type="submit">
                    Create
                </button>
            </form>
        );
    }
}

export default GameForm;