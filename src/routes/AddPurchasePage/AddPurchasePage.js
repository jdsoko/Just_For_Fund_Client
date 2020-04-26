import React, { Component } from 'react'
import './AddPurchasePage.css'
import PurchaseForm from '../../components/PurchaseForm/PurchaseForm'

export default class AddPurchasePage extends Component{
    render(){
        return(
            <div>
                <PurchaseForm />
            </div>
        )
    }
}