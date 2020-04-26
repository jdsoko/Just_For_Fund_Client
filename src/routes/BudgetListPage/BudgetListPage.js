import React, { Component } from 'react'
import './BudgetListPage.css'
import BudgetItem from '../../components/BudgetItem/BudgetItem'
import RecentPurchase from '../../components/RecentPurchase/RecentPurchase'
import Data from './BudgetData'
import { Link } from 'react-router-dom'

export default class BudgetListPage extends Component{
    state = {
        data: Data
    }

    renderBudgetList(Data){
        return Data.map(budget =>
            <div className="budgetRender">
                <BudgetItem 
                    name={budget.name}
                    limit={budget.limit}
                    remaining={budget.remaining}
                />
                <h3>Most Recent Purchase: </h3>
                <RecentPurchase 
                    date={budget.recentPurchase.date}
                    amount={budget.recentPurchase.amount}
                    category={budget.recentPurchase.category}
                />
            </div>
            )
    }
    render(){
        return(
            <div>
                <div className="addBudget">
                    <Link to="/budgets/add">
                    <button className="newBudget">New Budget</button>
                    </Link>
                </div>
                {this.renderBudgetList(this.state.data)}
            </div>
        )
    }
}