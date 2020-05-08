import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css'
import Header from '../../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

export default class LoginPage extends Component{
    render(){
        return(
            <div>
               <LoginForm /> 
                <p className="demoInfo">(Demo app with username 'demo-user' and password 'Pass123!')
                </p>
            </div>
        )
    }
}