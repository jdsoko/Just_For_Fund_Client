import React, { Component } from 'react'
import './PurchaseForm.css'

export default class PurchaseForm extends Component{
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
            <h2 className="regHeader">Add Purchase</h2>
            
            <input
                className="loginInput" 
                type="number" 
                step="0.01" 
                placeholder="$00.00"
            />
            <input
                type="text"
                className="loginInput"
                name="category"
                placeholder="Enter Category"
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