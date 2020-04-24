import React, { Component } from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom'


export default class LoginForm extends Component{
    handleSubmit = ev => {
        ev.preventDefault()
    }


    render(){
        return(
            <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
            <input 
                type="text" 
                name="user_name"
                placeholder="Username"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
            />
            <button type="submit">
                Log-In
            </button>
            <p className="register">
                Not registered?
                <Link to='/'>
                    Create account
                </Link>

            </p>
            </form>
        )
    }

}