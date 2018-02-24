import React from 'react';

class SignupForm extends React.Component {
    state= {
        email:'',
        password: '',
        passwordConfirmation: ''
    };

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
                        <div className="field">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                className="text"
                                placeholder="Make it secure"
                                value = {this.state.passwordConfirmation}
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

export default SignupForm;