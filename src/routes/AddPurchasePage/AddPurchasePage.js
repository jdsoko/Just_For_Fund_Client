import React, { Component } from 'react'
import './AddPurchasePage.css'
import PurchaseForm from '../../components/PurchaseForm/PurchaseForm'

export default class AddPurchasePage extends Component{
    render(){
        return(
            <div>
                <PurchaseForm 
                    budget_id={this.props.location.state.budget_id}
                />
            </div>
        )
    }
}