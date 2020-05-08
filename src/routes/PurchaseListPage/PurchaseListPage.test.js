import React from 'react'
import ReactDOM from 'react-dom'
import PurchaseListPage from './PurchaseListPage'


describe('PurchaseListPage component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<PurchaseListPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})