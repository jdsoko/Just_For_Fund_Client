import React, { Component } from 'react'
import './RecentPurchase.css'


export default class RecentPurchase extends Component{
    render(){
        return(
            <div className="recentPurchase">
                
                <h4>Date: {this.props.date}</h4>
                <p>Amount: ${this.props.amount}</p>
                <p>Category: {this.props.category}</p>
            </div>
        )
    }
}