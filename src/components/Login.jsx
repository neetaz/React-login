import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="Login">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label for="icon_prefix">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">apps</i>
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
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