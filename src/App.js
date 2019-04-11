import React, { Component } from 'react';
import './library/scss/App.scss';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Login from './components/Login';
import Register from './components/Register';
import './library/css/materialize-icons.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state ={
      users:[
        {
          'id':1,
          'username':'admin',
          'password':'pass'
        },
        {
          'id':2,
          'username':'neeta',
          'password':'neeta123'
        },
        {
          'id':3,
          'username':'test',
          'password':'test123'
        }
      ]
    }
  }

  render() {
    // console.log(this.state.users);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="row">
              <ul className="tabs">
                <li className="tab col s6">
                  <Link to="/" className="active">Login</Link>
                </li>
                <li className="tab col s6">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
              <Route exact path="/" render={(props) => <Login {...props} users={this.state.users} /> } />
              <Route path="/register" component={Register} />
            </div>
        </div>
      </div>
    </Router>
  );}
}

export default App;
