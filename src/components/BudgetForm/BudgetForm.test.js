import React from 'react'
import ReactDOM from 'react-dom'
import BudgetForm from './BudgetForm'


describe('BudgetForm component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BudgetForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})