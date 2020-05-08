import React from 'react'
import ReactDOM from 'react-dom'
import BudgetItem from './BudgetItem'


describe('BudgetItem component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BudgetItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})