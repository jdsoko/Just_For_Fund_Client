import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import BudgetListPage from '../../routes/BudgetListPage/BudgetListPage';
import PurchaseListPage from '../../routes/PurchaseListPage/PurchaseListPage'
import AddPurchasePage from '../../routes/AddPurchasePage/AddPurchasePage';
import AddBudgetPage from '../../routes/AddBudgetPage/AddBudgetPage'
import PrivateRoute from '../../routes/PrivateRoute/PrivateRoute';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faTrash, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons'


library.add(faTrashAlt, faTrash, faTrashRestoreAlt)

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
        <PrivateRoute 
          exact
          path={'/budgets'}
          component={BudgetListPage}
        />
        <PrivateRoute 
          exact
          path={'/purchases'}
          component={PurchaseListPage}
        />
        <PrivateRoute 
          exact
          path={'/purchases/add'}
          component={AddPurchasePage}
        />
        <PrivateRoute 
          exact
          path={'/budgets/add'}
          component={AddBudgetPage}
        />

      </Switch>
      
    </div>
  );
}

export default App;
