import React, { Component } from 'react'
import './BudgetListPage.css'
import BudgetItem from '../../components/BudgetItem/BudgetItem'
import RecentPurchase from '../../components/RecentPurchase/RecentPurchase'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'

export default class BudgetListPage extends Component{
    state = {
        budgets: [],
        purchases: [],
        error: null,
        mostRecentPurchase: {}
    }

    componentDidMount(){
        this.fetchBudgets()
        
    }

    
    fetchBudgets(){
        fetch(`${config.API_BASE_URL}/budgets/user/1`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok) 
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(resJson => this.setState({ budgets: resJson })
        )
        
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    renderBudgetList(budgets){
        const { error } = this.state
        if(error !== null){
            return <div role='alert' id="budgetError">
                {error && <p className='red'>{error}</p>}
            </div>
        }
        else{
        const Budgets = budgets
        return Budgets.map(budget =>
            
            <div className="budgetRender">
                
                <BudgetItem 
                    name={budget.budget_name}
                    limit={budget.budget_limit}
                    remaining={Math.round((budget.budget_limit - budget.purchase_total) * 100)/100}
                    budget_id={budget.id}
                />
                <h3>Most Recent Purchase: </h3>
                <RecentPurchase 
                    budget_id={budget.id}
                />
               
                
            </div>
            )}
    }
    render(){
        return(
            <div>
                <div className="addBudget">
        
                    <Link to={{pathname: "/budgets/add", state: {user_name: this.state.user_name}}}>
                    <button className="newBudget">New Budget</button>
                    </Link>
                </div>
                {this.renderBudgetList(this.state.budgets)}
            </div>
        )
    }
}