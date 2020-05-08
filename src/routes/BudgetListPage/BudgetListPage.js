import React, { Component } from 'react'
import './BudgetListPage.css'
import BudgetItem from '../../components/BudgetItem/BudgetItem'
import RecentPurchase from '../../components/RecentPurchase/RecentPurchase'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header/Header'
import { Redirect } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton/LogoutButton'

export default class BudgetListPage extends Component{
    state = {
        
        budgets: [],
        purchases: [],
        error: null,
        mostRecentPurchase: {}
    }

    componentDidMount(){
        this.fetchBudgets()
        window.scrollTo(0, 0)
    }

    
    fetchBudgets(){
        fetch(`${config.API_BASE_URL}/budgets/user/`, {
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
        if(this.state.budgets.length === 0){
            return <h2 id="noBudget" >No Budgets Found</h2>
           
        }
        if(error !== null){
            return <div className="pageError" role='alert'>
                        {error && <p className="error">{error}</p>}
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
                <h3 className="mostRecentPurchase">Most Recent Purchase: </h3>
                <RecentPurchase 
                    budget_id={budget.id}
                />
               
                
            </div>
            )}
    }
    render(){
        const { error } = this.state
        
        return(
            <div>
                <div className="addBudget">
                    <div className="budgetHead">
                    
                    </div>
                    <LogoutButton/>
                    <Link to={{pathname: "/budgets/add", state: {user_name: this.state.user_name}}}>
                    <button className="newBudget"><FontAwesomeIcon className="plus" icon={faPlus}/>New Budget</button>
                    </Link>
                    
                </div>
                {this.renderBudgetList(this.state.budgets)}
            </div>
        )
    }
}