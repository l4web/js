import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallBack from 'react-image-fallback';


// const tags = [
//     {_id:1, name: 'dice'},
//     {_id:2, name: 'economic'},
//     {_id:3, name: 'family'}
// ];
//
// const genres = [
//     {_id:1, name: 'abstract'},
//     {_id:2, name: 'euro'},
//     {_id:3, name: 'ameritrash'}
// ];


class GameForm extends React.Component {
    state={
        data: {
            name: '',
            description: '',
            price: 0,
            duration: 0,
            players: '',
            featured: false,
            tags: [],
            genre: 1,
            publisher: 1,
            thumbnail: ''
        },
        errors: {}
    };


    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.data)
    };

    handleStringChange = e => {this.setState({ data:{ ...this.state.data, [e.target.name]: e.target.value }}) };
    handleNumberChange = e => {this.setState({ data:{...this.state.data, [e.target.name]: parseInt(e.target.value, 10)}}) };
    handleCheckboxChange = e => {this.setState({ data:{...this.state.data,[e.target.name]: e.target.checked()}})};
    toggleTag= tag => {
        this.state.data.tags.includes(tag._id)
        ? this.setState({ data:{tags: this.state.data.tags.filter(id => id !== tag.id)}})
        : this.setState({ data:{tags: [...this.state.data.tags, tag._id]}})
    };
    handleGenreChange = genre => {this.setState({genre: genre._id})};

    render(){
        return (
            <form  className="ui form" onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <div className="field">
                            <label htmlFor="name">Game title</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="text"
                                placeholder="Full game title"
                                value = {this.state.data.name}
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
                                value = {this.state.data.description}
                                onChange={this.handleStringChange}
                            />
                        </div>
                    </div>
                    <div className="four wide column">
                        <ReactImageFallBack
                            src={this.state.data.thumbnail}
                            fallbackImage="http://via.placeholder.com/250x250"
                            alt="thumbnail"
                            className="ui image"

                        />
                    </div>
                </div>


                <div className="field">
                    <label htmlFor="thumbnail">Thumbnail src </label>
                    <input
                        type="text"
                        id="thumbnail"
                        name="thumbnail"
                        className="text"
                        placeholder="Full game title"
                        value = {this.state.data.thumbnail}
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
                            value = {this.state.data.price}
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
                            value = {this.state.data.duration}
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
                            value = {this.state.data.players}
                            onChange={this.handleStringChange}
                        />
                    </div>
                </div>
                    {/*<div className="inline field">*/}
                        {/*<input*/}
                            {/*type="checkbox"*/}
                            {/*id="featured"*/}
                            {/*name="featured"*/}
                            {/*checked = {this.state.featured}*/}
                            {/*onChange={this.handleCheckboxChange}*/}
                        {/*/>*/}
                        {/*<label htmlFor="featured">Players </label>*/}
                    {/*</div>*/}
                {/*<div className="field">*/}
                    {/*<label>Tags</label>*/}
                    {/*{*/}
                        {/*tags.map(tag => (*/}
                                {/*<div key={tag._id} className="inline field">*/}
                                    {/*<input id={'tag-${tag._id}'}*/}
                                           {/*type="checkbox"*/}
                                           {/*checked={this.state.tags.includes(tag._id)}*/}
                                           {/*onChange={() => this.toggleTag(tag)}*/}
                                    {/*/>*/}
                                    {/*<label htmlFor={'tag-${tag._id}'}>{tag.name}</label>*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*)*/}
                    {/*}*/}
                {/*</div>*/}
                {/*<div className="field">*/}
                    {/*<label>Genres</label>*/}
                    {/*{genres.map( genre => (*/}
                        {/*<div key={genre._id} className="inline field">*/}
                            {/*<input*/}
                                {/*id={'genre-${genre._id}'}*/}
                                {/*type="radio"*/}
                                {/*checked={this.state.genre === genre._id}*/}
                                {/*onChange={() => this.handleGenreChange(genre)}*/}
                            {/*/>*/}
                            {/*<label htmlFor={'genre-${genre._id}'}>{genre.name}</label>*/}
                        {/*</div>*/}
                    {/*))}*/}
                {/*</div>*/}
                {/*<div className="field">*/}
                    {/*<label>Select game provider</label>*/}
                    {/*<select*/}
                    {/*name="publisher"*/}
                    {/*value={this.state.publisher}*/}
                    {/*onChange={this.handleNumberChange}*/}
                    {/*>*/}
                        {/*<option value="0" >Choose publisher</option>*/}
                        {/*{ this.props.publishers.map( publisher => (*/}
                            {/*<option key={publisher._id} value={publisher._id}>{publisher.name}</option>*/}
                        {/*))}*/}
                    {/*</select>*/}
                {/*</div>*/}
                <div className="ui fluid buttons">
                    <button className="button ui primary" type="submit">
                        Create
                    </button>
                    <div className="or"></div>
                    <a onClick={this.props.hideGameForm} className="ui button">Cancel</a>
                </div>


            </form>
        );
    }
}

GameForm.propTypes = {
    publishers:PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    hideGameForm: PropTypes.func.isRequired
};

GameForm.defaultProps = {
    publishers: []
};
export default GameForm;