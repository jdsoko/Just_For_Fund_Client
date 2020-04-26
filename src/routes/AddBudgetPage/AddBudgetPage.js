import React, { Component } from 'react'
import './AddBudgetPage.css'
import BudgetForm from '../../components/BudgetForm/BudgetForm'

export default class AddBudgetPage extends Component{
    render(){
        return(
            <div>
                <BudgetForm />
            </div>
        )
    }

}