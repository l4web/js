import React from 'react';
import PropTypes from 'prop-types';
import FormInlineMessage from './messages/FormInlineMessage';
const initialPublisher = {
    name: '',
    website: ''
};
class PublisherForm extends React.Component {
    state={
        data: initialPublisher,
        errors: {},
        loading: false
    };
    componentDidMount() {
        if(this.props.publisher._id){
            this.setState({data : this.props.publisher  })
        }
    };
    handleStringChange = e => {this.setState({ data:{ ...this.state.data, [e.target.name]: e.target.value }}) };


    componentWillReceiveProps(nextProps) {
        if(nextProps.publisher._id && nextProps.publisher._id !== this.state.data._id){
            this.setState({data: nextProps.publisher});
        }
        if(!nextProps.publisher._id){
            this.setState({data:initialPublisher})
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if(Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)

        }


    };
    validate(data) {
        const errors= {};
        if(!data.name) errors.name= "This field can't be blank";
        if(!data.website) errors.website= "This field can't be blank";

        return errors;

    }



    render(){
        const {errors, data, loading} = this.state;
        const formClassName = loading ? 'ui form loading' : 'ui form';
        return (
            <form className={formClassName} onSubmit={this.handleSubmit}>
                <div className={errors.name? 'field error' : 'field' }>
                <label htmlFor="name">Publisher name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="text"
                        placeholder="Publisher"
                        value = {data.name}
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
                        value = {data.website}
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
    publisher: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        website: PropTypes.string
    }),
    hidePublishersForm: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
};

export default PublisherForm;