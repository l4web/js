import React from 'react';

class GameForm extends React.Component {
    state={
        name: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log({
            title: this.name.value
        })
    };

    handleChangeName = e => {
        this.setState({ name: e.target.value})
    };

    render(){
        return (
            <form  className="ui form" onSubmit={this.handeSubmit}>
                <div className="field">
                    <label htmlFor="name">Game title</label>
                    <input
                        type="text"
                        id="name"
                        className="text"
                        placeholder="Full game title"
                        value = {this.state.name}
                        onChange={this.handleChangeName}
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