import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import BudgetListPage from '../../routes/BudgetListPage/BudgetListPage';
import PurchaseListPage from '../../routes/PurchaseListPage/PurchaseListPage'
import AddPurchasePage from '../../routes/AddPurchasePage/AddPurchasePage';
import AddBudgetPage from '../../routes/AddBudgetPage/AddBudgetPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={'/'}
          component={LoginPage}
        />
        <Route 
          exact
          path={'/registration'}
          component={RegistrationPage}
        />
        <Route 
          exact
          path={'/budgets'}
          component={BudgetListPage}
        />
        <Route 
          exact
          path={'/purchases'}
          component={PurchaseListPage}
        />
        <Route 
          exact
          path={'/purchases/add'}
          component={AddPurchasePage}
        />
        <Route 
          exact
          path={'/budgets/add'}
          component={AddBudgetPage}
        />

      </Switch>
      
    </div>
  );
}

export default App;
