import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
 
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

      </Switch>
      
    </div>
  );
}

export default App;
