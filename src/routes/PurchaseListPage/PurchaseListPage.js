import React, { Component } from 'react'
import './PurchaseListPage.css'
import Data from './PurchaseData'
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem'
import { Link } from 'react-router-dom'

export default class PurchaseListPage extends Component{
    state = {
        data: Data
    }

    renderPurchase(Data){
        return Data.map(purchase => 
            <PurchaseItem 
                date={purchase.date}
                amount={purchase.amount}
                category={purchase.category}
            />
        ) 
    }
    render(){
        return(
            <div className="purchasePage">
                <h2 className='purchaseHead'> Purhcase History </h2>
                <button className="addButton"><Link className="addLink" to='/purchases/add'>Add Purchase</Link></button>
                <label htmlFor="category" className="purchaseLabel">Sort:</label> 
                <div id="category">
                <select>
                    <option value="none" selected hidden disabled>Categories</option>
                    <option value="groceries">Groceries</option>
                    <option value="transportation">Transportation</option>
                    <option value="bills">Bills</option>
                    <option value="subscription">Subscription</option>
                    <option value="recreation">Recreation</option>
                </select>
                </div>
                {this.renderPurchase(this.state.data)}
            </div>
        )
    }
}