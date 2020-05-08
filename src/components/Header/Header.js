import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return(
        <div className="header">
            <Link className="header-link" to='/'>
            <header>Ju$t for Fund </header>
            
            </Link>
        </div>
        )
    }
}