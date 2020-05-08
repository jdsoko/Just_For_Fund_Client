import React from 'react'
import ReactDOM from 'react-dom'
import PurchaseForm from './PurchaseForm'


describe('PurchaseForm component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<PurchaseForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})