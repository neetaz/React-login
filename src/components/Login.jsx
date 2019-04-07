import React, { Component } from 'react';

const initialState ={
    username:'',
    password:'',
    usernameError:'',
    passwordError:''
}

class Login extends Component{
    constructor(){
        super();
        this.state = initialState;
    }

    validate = () => {
        let usernameError = '';
        let passwordError = '';

        if(!this.state.username){
            usernameError = "Please enter username";
        }
        if(!this.state.password){
            passwordError = 'Please enter password';
        }
        if(usernameError || passwordError){
            this.setState({usernameError, passwordError});
            return false;
        }
        return true;
    }

    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
            //reset to initial state
            this.setState(initialState);
        }       
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value}); 
    }

    render(){
        return(
            <div id="Login">
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <i className="material-icons prefix">account_circle</i>
                                <input 
                                    id="icon_prefix" 
                                    type="text" 
                                    className="validate" 
                                    name="username" 
                                    onChange={this.handleChange}
                                    value={this.state.username} />
                                <label htmlFor="icon_prefix">Username</label>
                                <div className="error-msg">{this.state.usernameError}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <i className="material-icons prefix">apps</i>
                                <input 
                                    id="password" 
                                    type="password" 
                                    className="validate" 
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                                <label htmlFor="password">Password</label>
                                <div className="error-msg">{this.state.passwordError}</div>
                            </div>
                        </div>
                        <div className="row">
                            <label><input type="checkbox" /><span>Remember Me</span></label>
                        </div>
                        <div className="row">
                            <button className="btn waves-effect waves-light" type="submit" name="action">login
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="divider"></div>
                        <div className="row login-footer section">
                            <div>Don't have an account? <a href="/register">Sign Up</a></div>
                            <div><a href="#">Forgot your password?</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;