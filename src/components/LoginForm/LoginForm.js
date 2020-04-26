import React, { Component } from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default class LoginForm extends Component{
   state={
       redirect: false
   }
    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({redirect: true})
    }

    render(){
        if (this.state.redirect){
            return <Redirect to='/budgets' />
        }
        return(
            <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
            <fieldset className="loginField">
            <h2 className="regHeader">Log-In</h2>
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
                Submit
            </button>
            <p className="register">
                Not registered?
                <Link className="regLink" to='/registration'>
                    Create account
                </Link>

            </p>
            </fieldset>
            </form>
        )
    }

}