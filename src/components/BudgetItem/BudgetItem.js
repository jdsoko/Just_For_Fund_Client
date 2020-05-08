import React, { Component } from 'react';
import './BudgetItem.css'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import history from '../../history'

export default class BudgetItem extends Component{
    state = {
        error: null,
        user_name: '',
    }

    handleSubmit = e => {
        e.preventDefault()
        const body = { 
            user_name: this.state.user_name,
            budget_id: this.props.budget_id 
        }
        this.setState({user_name: ''})
        fetch(`${config.API_BASE_URL}/users/permissions/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(body)
        })
        .then(res =>
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()     
        )
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    handleDelete = () => {
        fetch(`${config.API_BASE_URL}/budgets/${this.props.budget_id}/`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()    
        )
        .catch(res => {
            this.setState({ error: res.error })
        })
        setTimeout(() => window.location.reload(), 200)
    }

    
    handleRemaining = () => {
        const remaining = this.props.remaining
        if(remaining < 0){
        return <p className="amountLeft">
               <span className="overAlert">***OVER BUDGET BY ${Math.abs(remaining)}***</span>
               </p>
        }
        else{
            return  <p className="amountLeft">Remaining: ${remaining}</p>
        }
    }

    render(){
        const { error } = this.state
        return(
            <div className="budget">
                    
                    <button onClick={this.handleDelete} className="deleteButton"><FontAwesomeIcon icon="trash-alt"/></button>
        
                    <h1 className="budgetName">{this.props.name}</h1>
                    <form 
                        className="permissionForm"
                        onSubmit={this.handleSubmit}
                    >
                    <label id="addLabel" htmlFor="add">Add user to budget:</label>
                    
                    <input 
                        value={this.state.user_name}
                        required 
                        type="text" 
                        className="add" 
                        placeholder="Enter username"
                        onChange={e => this.setState({user_name: e.target.value})} 
                    />
                    <button type="submit" className="addUser">Add</button>
                    <div role='alert'>
                        {error && <p className="error">{error}</p>}
                    </div>
                    </form>
                    <h4 className="budgetLimit">Limit: ${this.props.limit}</h4>
                    {this.handleRemaining()}
                    <Link to={{pathname: "/purchases", state: {budget_id: this.props.budget_id, budget_name: this.props.name}}}>
                        <button className="purchaseButton">See Purchases</button>
                    </Link> 
            </div>
        )
    }
}