import React from 'react'
import ReactDOM from 'react-dom'
import AddPurchasePage from './AddPurchasePage'


describe('AddPurchasePage component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AddPurchasePage />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})