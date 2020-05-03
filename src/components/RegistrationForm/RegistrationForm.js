import React, { Component } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom'
import history from '../../history'
import AuthApiService from '../../services/auth-api-service';


export default class RegistrationForm extends Component{
    state = {
        error: null,
        full_name: '',
        user_name: '',
        password: ''
    }
    
    handleSubmit = ev => {
        ev.preventDefault()
        
        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: this.state.user_name,
            password: this.state.password,
            full_name: this.state.full_name
        })
        .then(user => {
            this.setState({ full_name: '' })
            this.setState({ user_name: '' })
            this.setState({ password: '' })
            history.push('/')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render(){
        const { error } = this.state
        return(
            <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
    
            <fieldset className="loginField">
            <h2 className="regHeader">Register for Account</h2>
            <div role='alert'>
                {error && <p className="red">{error}</p>}
            </div>
            <input 
                className="loginInput"
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
                onChange={e => this.setState({ full_name: e.target.value })}
            />
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
                
                <Link className="logLink" to='/'>
                    Back to Log-In
                </Link>
            </p>
            </fieldset>
        </form>
        )
    }
}