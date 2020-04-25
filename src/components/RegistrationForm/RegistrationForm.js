import React, { Component } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom'


export default class RegistrationForm extends Component{
    handleSubmit = ev => {
        ev.preventDefault()
    }

    render(){
        return(
            <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
    
            <fieldset className="loginField">
            <h2 className="regHeader">Register for Account</h2>
            <input 
                className="loginInput"
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
            />
            <input 
                className="loginInput"
                type="text" 
                name="user_name"
                placeholder="Username"
                required
            />
            <input
                type="password"
                className="loginInput"
                name="password"
                placeholder="Password"
                required
            />
            <button className="loginButton" type="submit">
                Register
            </button>
            <p className="register">
                
                <Link className="logLink" to='/'>
                    Back to Log-In
                </Link>
            </p>
            </fieldset>
        </form>
        )
    }
}