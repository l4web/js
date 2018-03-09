import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallBack from 'react-image-fallback';
import { Link } from 'react-router-dom';
import FormInlineMessage from './messages/FormInlineMessage';

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

const initialData = {
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
};

class GameForm extends React.Component {
    state={
        data: initialData,
        errors: {},
        loading: false
    };

    componentDidMount() {
        if(this.props.game._id){
            this.setState({data: this.props.game});
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.game._id && nextProps.game._id !== this.state.data._id){
            this.setState({data: nextProps.game});
        }
        if(!nextProps.game._id){
            this.setState({data:initialData})
        }
    }

    validate(data) {
        const errors= {};
        if(!data.name) errors.name= "This field can't be blank";
        if(!data.players) errors.players= "This field can't be blank";
        if(!data.publisher) errors.publisher= "This field can't be blank";
        if(!data.thumbnail) errors.thumbnail= "This field can't be blank";
        if(data.price <= 0) errors.price= "Too cheap don't you think ?";
        if(data.duration <= 0) errors.duration= "Too short, isn't it?";

        return errors;

    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if(Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({errors: err.response.data.errors, loading: false})
                );
        }


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
        const  {data, errors, loading} =this.state;
        const formClassName = loading ? 'ui form loading' : 'ui form';
        return (
            <form  className={formClassName} onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <div className={errors.name ? 'field error' : 'field' }>
                            <label htmlFor="name">Game title</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="text"
                                placeholder="Full game title"
                                value = {data.name}
                                onChange={this.handleStringChange}
                            />
                            <FormInlineMessage type="error" content={errors.name}/>
                        </div>
                        <div className={errors.description ? 'field error' : 'field' }>
                            <label htmlFor="description">Game description</label>
                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                className="text"
                                placeholder="Game description"
                                value = {data.description}
                                onChange={this.handleStringChange}
                            />
                            <FormInlineMessage type="error" content={errors.description}/>
                        </div>
                    </div>
                    <div className="four wide column">
                        <ReactImageFallBack
                            src={data.thumbnail}
                            fallbackImage="http://via.placeholder.com/250x250"
                            alt="thumbnail"
                            className="ui image"

                        />
                    </div>
                </div>


                <div className={errors.thumbnail ? 'field error' : 'field' }>
                    <label htmlFor="thumbnail">Thumbnail src </label>
                    <input
                        type="text"
                        id="thumbnail"
                        name="thumbnail"
                        className="text"
                        placeholder="Full game title"
                        value = {data.thumbnail}
                        onChange={this.handleStringChange}
                    />
                    <FormInlineMessage type="error" content={errors.thumbnail}/>
                </div>
                <div className="three fields">
                    <div className={errors.price ? 'field error' : 'field' }>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="text"
                            value = {data.price}
                            onChange={this.handleNumberChange}
                        />
                        <FormInlineMessage type="error" content={errors.price}/>
                    </div>
                    <div className={errors.duration ? 'field error' : 'field' }>
                        <label htmlFor="duration">Duration (in min) </label>
                        <input
                            type="number"
                            id="duration"
                            name="duration"
                            className="text"
                            value = {data.duration}
                            onChange={this.handleNumberChange}
                        />
                        <FormInlineMessage type="error" content={errors.duration}/>
                    </div>
                    <div className={errors.players ? 'field error' : 'field' }>e
                        <label htmlFor="players">Players </label>
                        <input
                            type="text"
                            id="players"
                            name="players"
                            className="text"
                            placeholder="Full game title"
                            value = {data.players}
                            onChange={this.handleStringChange}
                        />
                        <FormInlineMessage type="error" content={errors.players}/>
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
                    <Link to="/games" className="ui button">Cancel</Link>
                </div>


            </form>
        );
    }
}

GameForm.propTypes = {
    publishers:PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    submit: PropTypes.func.isRequired,
    game: PropTypes.shape({
        name: PropTypes.string,
        thumbnail: PropTypes.string,
        players: PropTypes.string,
        price: PropTypes.number,
        duration: PropTypes.number,
        featured: PropTypes.bool,
        desc: PropTypes.string
    }).isRequired
};

GameForm.defaultProps = {
    publishers: []
};
export default GameForm;