import React, { Component } from 'react'
import './RecentPurchase.css'
import config from '../../config'
import TokenService from '../../services/token-service'


export default class RecentPurchase extends Component{
    constructor(props){
    super(props);    
    this.state = {
        renderEmpty: false,
        purchases: [],
        error: null,
        mostRecentPurchase: {}
    }
    }
    componentDidMount(){
        this.fetchPurchasesForBudget(this.props.budget_id)
    }

    fetchPurchasesForBudget(budget_id){
        this.setState({ purchases: []})
        this.setState({ mostRecentPurchase: {}})
        fetch(`${config.API_BASE_URL}/purchases/budget/${budget_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
              (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
            )
        .then(resJson => this.setState({ purchases: resJson }))
        .then(purchases => {
            if(this.state.purchases.length === 0){
                this.setState({ renderEmpty: true })
            }
            else{
                this.getMostRecentPurchase(this.state.purchases)
            }
        })
    }

    getMostRecentPurchase(purchases){
        const purchaseDates = []
        purchases.map(purchase => 
            
            purchaseDates.push
                ({
                    id: purchase.id,
                    date: Date.parse(purchase.date),   
                })    
        )
        const recentPurchase = purchaseDates.reduce((prev, current) => (+prev.id > +current.id) ? prev : current)
        
        this.fetchMostRecentPurchase(recentPurchase.id)
    }

    fetchMostRecentPurchase(purchase_id){
        fetch(`${config.API_BASE_URL}/purchases/${purchase_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          )
          .then(resJson => this.setState({ mostRecentPurchase: resJson })
          )
          .catch(res => {
              this.setState({ error: res.error })
          })
    }


    determineRender(){
        if(this.state.renderEmpty === false){
            return <div>
                  <h4>Date: {this.state.mostRecentPurchase.date}</h4>
                  <p>Amount: ${this.state.mostRecentPurchase.amount}</p>
                  <p>Category: {this.state.mostRecentPurchase.category}</p>
                  <p>Made By: {this.state.mostRecentPurchase.name}</p>
                  </div>
        }
        else{
            return <div className="noPurchase">
                        <h3>No Purchases Made Yet</h3>
                   </div>
        }
    }

    render(){
        return(
            <div className="recentPurchase">
                {this.determineRender()}
            </div>
        )
    }
}