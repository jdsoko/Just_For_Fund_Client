import React, { Component } from 'react';
import './BudgetItem.css'
import { Link } from 'react-router-dom'

export default class BudgetItem extends Component{
    render(){
        return(
            <div className="budget">
                <div className="addForm">
                    <h1 className="budgetName">{this.props.name}</h1>
                    <label id="addLabel" htmlFor="add">Add user to budget:</label>
                    <input required type="text" className="add" placeholder="Enter username" />
                    <button className="addUser">Add</button>
                </div>    
                    <h4 className="budgetLimit">Budget Limit: ${this.props.limit}</h4>
                    <p className="amountLeft">Amount Left: ${this.props.remaining}</p>
                    <Link to="/purchases">
                        <button className="purchaseButton">See Purchases</button>
                    </Link>
                
            </div>
        )
    }
}