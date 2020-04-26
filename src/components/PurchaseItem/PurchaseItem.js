import React, { Component } from 'react'
import './PurchaseItem.css'


export default class PurhcaseItem extends Component {
    
    render(){
        return(
            <div className="purchaseItem">
                <h4>Date: {this.props.date}</h4>
                <p>Amount: ${this.props.amount}</p>
                <p>Category: {this.props.category}</p>
            </div>
        )
    }
}