import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Users extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Users
            </div>
            // <ul class="collection with-header">
            //     <li class="collection-header"><h4>Users</h4></li>
            //     {this.state.users.map((usr,i) => <li class="collection-item"><div>{usr.username}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>)}
            // </ul>
        );
    }
}

export default Users;