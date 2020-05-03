import React, { Component } from 'react'
import './PurchaseForm.css'
import { format } from 'date-fns'
import config from '../../config'
import TokenService from '../../services/token-service'
import history from '../../history'

export default class PurchaseForm extends Component{
    
    state = {
        error: null,
        amount: null,
        category: '',
        date: '',
    }
    
    handleSubmit = ev => {
        ev.preventDefault()
        const reqBody = {
            date: format(new Date(this.state.date), 'MM/dd/yy'),
            amount: Number(this.state.amount),
            category: this.state.category,
            budget_id: this.props.budget_id
        }
        fetch(`${config.API_BASE_URL}/purchases`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(reqBody)
        })
        .then(res =>
              (!res.ok)
              ? res.json().then(e => Promise(e))
              : res.json()
            )
        .then(resJson => 
                setTimeout(() => history.push('/budgets'), 200)
            )
            .catch(res => {
                this.setState({ error: res.error})
            })
       
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
                type="text"
                required
                name="date"
                placeholder="Enter Date: MM/DD/YY"
                onChange={e => this.setState({date: e.target.value})}
            />
            <input
                className="loginInput" 
                type="number" 
                step="0.01" 
                placeholder="$00.00"
                name="amount"
                required
                onChange={e => this.setState({amount: e.target.value})}
            />
            <input
                type="text"
                className="loginInput"
                name="category"
                placeholder="Enter Category"
                required
                onChange={e => this.setState({category: e.target.value})}
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