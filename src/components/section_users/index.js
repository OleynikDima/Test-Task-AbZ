import React, { Component } from 'react';
import ListUsers from '../list_users'
import fetchService from '../../service/fetch'



class Users_FrontEnd extends Component {
    state = {
        users:[]
    }

    componentDidMount(){
        fetchService().then(users => this.setState({users}))
    }

    render(){
        const {users} = this.state;
        const usersSlice = users.slice(0,4)
        console.log(usersSlice);
        return (
            <section className="users-section">
            <div className="users_container">
                <p className="users_container__title">Our cheerful users</p>
                <p className="users_container__text">Attention! Sorting users by registration date</p> 
                    {
                    users && <ListUsers users={usersSlice}/> 
                    }          
                <button className="position-container__button"> Show more </button>     
            </div>
            </section>
        ) 
    };
};


export default Users_FrontEnd;