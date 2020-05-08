import React, { Component } from 'react'
import './PurchaseListPage.css'
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem'
import { Link } from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default class PurchaseListPage extends Component{
    state = {
        purchases: [],
        filtered: [],
        error: null,
        selectedCategory: '',
        redirect: false,
        renderEmpty:  false,
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
            .then(purchases => {
                if(this.state.purchases.length === 0){
                    this.setState({ renderEmpty: true })
                }
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    renderPurchase(purchases){
        if( this.state.renderEmpty === false ) { 
            return purchases.map(purchase => 
                <PurchaseItem 
                    date={purchase.date}
                    amount={purchase.amount}
                    category={purchase.category}
                    name={purchase.name}
                />
        )}
        else{
            return <div className="noPurchase">
                    <h3>No Purchases Made Yet</h3>
                    </div>
        }
    }
    
    renderCategories(purchases){
        const distinctCategories = [...new Set(purchases.map(purchase => purchase.category))]
        
        return distinctCategories.map(category =>
                <option value={category}>{category}</option>
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
        const { error } = this.state
        return(
            <div className="purchasePage">
                <div className='purchaseHead'>
                <h3 className="purchaseHistory">Purchase History</h3>
                <button className="addButton">
                    <Link 
                        className="addLink" 
                        to={{pathname: '/purchases/add', state: {budget_id: this.props.location.state.budget_id}}}>
                           <FontAwesomeIcon icon={faPlus}/> Add Purchase
                        </Link></button>

                        <label htmlFor="category" className="purchaseLabel">Sort:</label> 
                <div id="category">
                <select className="select" onChange={this.handleChange}>
                    <option value="none" selected hidden disabled>Categories</option>
                    <option value="all">All</option>
                    {this.renderCategories(this.state.purchases)}
                </select>
                </div>
                </div>
                <div className="pageError" role='alert'>
                        {error && <p className="error">{error}</p>}
                    </div>
                
                {this.renderPurchase(this.state.filtered)}
            </div>
        )
    }
}