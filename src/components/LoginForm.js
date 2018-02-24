import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    state= {
        email:'',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };
    handleStringChange = e => {this.setState({ [e.target.name]: e.target.value}) };

    render(){
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="ui grid">
                    <div className="eight wide column">
                        <div className="field">
                            <label htmlFor="name">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="text"
                                placeholder="Your Email Address"
                                value = {this.state.email}
                                onChange={this.handleStringChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="text"
                                placeholder="Make it secure"
                                value = {this.state.password}
                                onChange={this.handleStringChange}
                            />
                        </div>
                        <div className="ui fluid buttons">
                            <button className="button ui primary" type="submit">
                                Create
                            </button>
                            <div className="or"></div>
                            <a  className="ui button">Cancel</a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginForm;