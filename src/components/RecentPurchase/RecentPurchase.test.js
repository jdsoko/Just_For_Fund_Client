import React from 'react'
import ReactDOM from 'react-dom'
import RecentPurchase from './RecentPurchase'


describe('RecentPurchase component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RecentPurchase />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})