import React, { Component } from 'react';

const initialState ={
    username:'',
    password:'',
    userID:'', 
    usernameError:'',
    passwordError:'',
    loginError:'',
    loginSuccess: false,
    redirect:false
}

class Login extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value}); 
    }

    isUserValid() {
        return this.props.users.find((element) => {
           return (element.username === this.state.username && element.password === this.state.password) ? element : false;
        })
    }

    handleLoginSuccess = (e) =>{
        if(this.state.redirect){
            this.props.history.push('/users');          
        }
    }

    validate = () => {
        let usernameError = '';
        let passwordError = '';
        let loginError = '';

        if(!this.state.username){
            usernameError = "Please enter username";
        }
        if(!this.state.password){
            passwordError = 'Please enter password';
        }
        if(usernameError || passwordError){
            // set error messages
            this.setState({usernameError, passwordError});
             //set login fail
            this.setState({loginSuccess:false});
            return false;
        } else{
            // check user exists
            let validUser = this.isUserValid();
            if(validUser){
                //console.log(validUser);
                this.setState({userID:validUser.id});
                this.setState({redirect:true});
                return true;
            }else{
                loginError = 'Please enter valid username and password';
                this.setState({loginError});
                return false;
            }
        }
        return true;
    }

    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            //set login success
            this.setState({loginSuccess:true});
            console.log(this.state);
            if(this.state.loginSuccess){
                this.handleLoginSuccess();
            }
        }       
    }

    render(){
        //console.log(this.props.users);
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
                        <div className="row">
                            <div className="error-msg">{this.state.loginError}</div>
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