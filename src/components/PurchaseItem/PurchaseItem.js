import React, { Component } from 'react'
import './PurchaseItem.css'


export default class PurhcaseItem extends Component {
    
    render(){
        return(
            <div className="purchaseItem">
                <p className="purchaseData"><span id="purchaseAmount">${this.props.amount}</span></p>
                  <p className="purchaseData"><span id="purchaseCategory">{this.props.category}</span></p>
                  <p className="purchaseData"><span id="purchaseDate">({this.props.date})</span><span id="purchaseUser">{this.props.name}</span></p>
            </div>
        )
    }
}