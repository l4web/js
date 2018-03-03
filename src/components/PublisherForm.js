import React from 'react';
import PropTypes from 'prop-types';
import FormInlineMessage from './messages/FormInlineMessage';

const initialPublisher = {
    _id: '',
    name: '',
    website: ''
}
class PublisherForm extends React.Component {
    state= {
        publisher: initialPublisher,
        errors: {}
    };
    componentDidMount() {
        if(this.props.publisher._id){
            this.setState({publisher : this.props.publisher  })
        }
    };
    handleStringChange = e => {this.setState({ publisher:{ ...this.state.publisher, [e.target.name]: e.target.value }}) };


    componentWillReceiveProps(nextProps) {
        if(nextProps.publisher._id && nextProps.publisher._id !== this.state.publisher_id){
            this.setState({publisher: nextProps.publisher});
        }
        if(!nextProps.publisher._id){
            this.setState({publisher:initialPublisher})
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.publisher);
        this.setState({errors});

        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.publisher);
        }

    };
    validate(data) {
        const errors= {};
        if(!data.name) errors.name= "This field can't be blank";
        if(!data.website) errors.website= "This field can't be blank";

        return errors;

    }



    render(){
        const {errors} = this.state;
        return (
            <form className="ui fluid form" onSubmit={this.handleSubmit}>
                <div className={errors.name? 'field error' : 'field' }>
                <label htmlFor="name">Publisher name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="text"
                        placeholder="Publisher"
                        value = {this.state.publisher.name}
                        onChange={this.handleStringChange}
                    />
                </div>
                <FormInlineMessage type="error" content={errors.name}/>
                <div className={errors.website ? 'field error' : 'field' }>
                <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        className="text"
                        placeholder="Website URL"
                        value = {this.state.publisher.website}
                        onChange={this.handleStringChange}
                    />
                </div>
                <FormInlineMessage type="error" content={errors.website}/>
                <div className="ui fluid buttons">
                    <button className="button ui primary" type="submit">
                        Save
                    </button>
                    <div className="or"></div>
                    <a  className="ui button" onClick={this.props.hidePublishersForm}>Cancel</a>
                </div>
            </form>
        );
    }
}

PublisherForm.propTypes = {
    selectedPublisher: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired
    }),
    hidePublishersForm: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
};

export default PublisherForm;