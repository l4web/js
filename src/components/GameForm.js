import React from 'react';

const tags = [
    {_id:1, name: 'dice'},
    {_id:2, name: 'economic'},
    {_id:3, name: 'family'}
];


class GameForm extends React.Component {
    state={
        name: '',
        description: '',
        price: 0,
        duration: 0,
        players: '',
        featured: false,
        tags: []
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    handleStringChange = e => {this.setState({ [e.target.name]: e.target.value}) };
    handleNumberChange = e => {this.setState({ [e.target.name]: parseInt(e.target.value, 10)}) };
    handleCheckboxChange = e => {this.setState({ [e.target.name]: e.target.checked()})};
    toggleTag= tag => {
        this.state.tags.includes(tag._id)
        ? this.setState({tags: this.state.tags.filter(id => id !== tag.id)})
        : this.setState({tags: [...this.state.tags, tag._id]})
    }

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
                    <div className="inline field">
                        <input
                            type="checkbox"
                            id="featured"
                            name="featured"
                            checked = {this.state.featured}
                            onChange={this.handleCheckboxChange}
                        />
                        <label htmlFor="featured">Players </label>
                    </div>
                <div className="field">
                    <label>Tags</label>
                    {
                        tags.map(tag => (
                                <div key={tag._id} className="inline field">
                                    <input id={'tag-${tag._id}'}
                                           type="checkbox"
                                           checked={this.state.tags.includes(tag._id)}
                                           onChange={() => this.toggleTag(tag)}
                                    />
                                    <label htmlFor={'tag-${tag._id}'}>{tag.name}</label>
                                </div>
                            )
                        )
                    }
                </div>


                <button className="button ui" type="submit">
                    Create
                </button>
            </form>
        );
    }
}

export default GameForm;