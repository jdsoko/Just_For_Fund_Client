import React, { Component } from 'react'
import './PurchaseListPage.css'
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class PurchaseListPage extends Component{
    state = {
        purchases: [],
        filtered: [],
        error: null,
        selectedCategory: ''
    }

    componentDidMount(){
        this.fetchPurchases()
    }

    fetchPurchases(){
        fetch(`${config.API_BASE_URL}/purchases/budget/${this.props.location.state.budget_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
              (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
            )
            .then(resJson => this.setState({ purchases: resJson, filtered: resJson })
            )
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    renderPurchase(purchases){
        
        return purchases.map(purchase => 
            <PurchaseItem 
                date={purchase.date}
                amount={purchase.amount}
                category={purchase.category}
                name={purchase.name}
            />
        ) 
    }
    
    renderCategories(purchases){
        return purchases.map(purchase =>
                <option value={purchase.category}>{purchase.category}</option>
            )
    }
    
    handleChange = (event) => {
        const selection = event.target.value
        const purchases = this.state.purchases
        const filteredPurchases = purchases.filter(purchase => 
            purchase.category.includes(selection)    
        )
        if(selection === 'all'){
            this.setState({ filtered: this.state.purchases })
        }
        else{
            this.setState({ filtered: filteredPurchases })
        }
        
    }
    
    
    render(){
        return(
            <div className="purchasePage">
                <h2 className='purchaseHead'> Purhcase History </h2>
                <button className="addButton"><Link className="addLink" to={{pathname: '/purchases/add', state: {budget_id: this.props.location.state.budget_id}}}>Add Purchase</Link></button>
                <label htmlFor="category" className="purchaseLabel">Sort:</label> 
                <div id="category">
                <select onChange={this.handleChange}>
                    <option value="none" selected hidden disabled>Categories</option>
                    <option value="all">All</option>
                    {this.renderCategories(this.state.purchases)}
                </select>
                </div>
                {this.renderPurchase(this.state.filtered)}
            </div>
        )
    }
}