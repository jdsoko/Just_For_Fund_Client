import React from 'react'
import ReactDOM from 'react-dom'
import AddBudgetPage from './AddBudgetPage'


describe('AddBudgetPage component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AddBudgetPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})