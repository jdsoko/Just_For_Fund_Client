import React, { Component } from 'react'
import './BudgetForm.css'

export default class BudgetForm extends Component{
    handleSubmit = ev => {
        ev.preventDefault()
    }

    render(){
        return(
            <div>
               <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
            <fieldset className="loginField">
            <h2 className="regHeader">New Budget Limit</h2>
            
            <input
                className="loginInput" 
                type="number" 
                step="0.01" 
                placeholder="$00.00"
            />
            <input
                type="text"
                className="loginInput"
                name="budgetName"
                placeholder="Enter Budget Name"
                required
            />
            <button className="loginButton" type="submit">
                Submit
            </button>
            
            </fieldset>
            </form> 
            </div>
        )
    }
}