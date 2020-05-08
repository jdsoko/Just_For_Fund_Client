import React, { Component } from 'react';
import './LogoutButton.css'
import TokenService from '../../services/token-service'
export default class LogoutButton extends Component {
    
    removeToken(){
        TokenService.clearAuthToken()
        setTimeout(() => window.location.reload(), 100)
    }

    render() {
        return(
        <div className="logout">
            <button onClick={this.removeToken} className="logoutButton">Logout</button>
        </div>
        )
    }
}