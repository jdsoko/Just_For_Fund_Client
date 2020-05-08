import React from 'react'
import ReactDOM from 'react-dom'
import BudgetListPage from './BudgetListPage'


describe('BudgetListPage component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BudgetListPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})