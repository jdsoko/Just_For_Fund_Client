import React, { Component } from 'react'
import './BudgetForm.css'
import config from '../../config'
import TokenService from '../../services/token-service'
import history from '../../history'
import { Link } from 'react-router-dom'

export default class BudgetForm extends Component{
    state = {
        limit: null,
        name: '',
        error: null,
    }
    
    handleSubmit = ev => {
        ev.preventDefault()
        const reqBody = {
            budget_limit: Number(this.state.limit),
            budget_name: this.state.name
        }

        fetch(`${config.API_BASE_URL}/budgets`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(reqBody)
        })
        .then(res => 
              (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
            )
        .then(resJson =>{
            this.addPermission(resJson.id)
        })
        
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    addPermission(id){
        const reqBody = {
            user_name: this.props.user_name,
            budget_id: id
        }
        fetch(`${config.API_BASE_URL}/users/permissions`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(reqBody)
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(e => 
            setTimeout(() => history.push('/budgets'), 200)
        )
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render(){
        const { error } = this.state
        return(
            <div>
                
                
               <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
            <fieldset className="loginField">
            <h2 className="regHeader">New Budget</h2>
            <div role='alert'>
                {error && <p className="error">{error}</p>}
            </div>
            <input
                name="bugetLimit"
                className="loginInput" 
                type="number" 
                step="0.01" 
                placeholder="Limit: $00.00"
                required
                onChange={e => this.setState({ limit: e.target.value})}
            />
            <input
                type="text"
                className="loginInput"
                name="budgetName"
                placeholder="Enter Budget Name"
                required
                onChange={e => this.setState({ name: e.target.value })}
            />
            <button className="loginButton" type="submit">
                Submit
            </button>
            <Link id="budgetBack" className="regLink" to='/budgets'>Back to Budgets</Link>
            </fieldset>
           
            </form> 
            </div>
        )
    }
}