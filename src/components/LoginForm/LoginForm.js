import React, { Component } from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import Header from '../../components/Header/Header'


export default class LoginForm extends Component{
   state={
       redirect: false,
       error: null,
       user_name: '',
       password: ''
   }
    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({ error: null })

        AuthApiService.postLogin({
            user_name: this.state.user_name,
            password: this.state.password,
        })
        .then(res => {
            
            
            TokenService.saveAuthToken(res.authToken)
            this.setState({ redirect: true })
        })
        .catch(res => {
            this.setState({ error: res.error })
        })

    }

    render(){
        const { error } = this.state
        if(this.state.redirect === true)
            return(
            <Redirect to={{pathname: '/budgets', state: {user_name: this.state.user_name}}} />
            )
        return(
            <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
            <fieldset className="loginField">
                
            <Header  className="header"/>
            <h2 className="logHeader">Log-In</h2>
            <div role='alert'>
                {error && <p className="error">{error}</p>}
            </div>
            <input 
                className="loginInput"
                type="text" 
                name="user_name"
                placeholder="Username"
                required
                onChange={e => this.setState({ user_name: e.target.value })}
            />
            <input
                type="password"
                className="loginInput"
                name="password"
                placeholder="Password"
                required
                onChange={e => this.setState({ password: e.target.value })}
            />
            <button className="loginButton" type="submit">
                Submit
            </button>
            <p className="register">
                Not registered?
                <Link className="regLink" to={{pathname: '/registration'}}>
                    Create account
                </Link>

            </p>
            </fieldset>
            </form>
        )
    }

}