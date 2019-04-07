import React, { Component } from 'react';

class Register extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="Login">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label for="icon_prefix">First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input id="username" type="text" className="validate" />
                            <label for="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">apps</i>
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">apps</i>
                            <input id="confirm-password" type="password" className="validate" />
                            <label for="confirm-password">Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button class="btn waves-effect waves-light" type="submit" name="action">Register
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;