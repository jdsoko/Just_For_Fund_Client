import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../routes/LoginPage/LoginPage'
 
function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={'/'}
          component={LoginPage}
        />

      </Switch>
      
    </div>
  );
}

export default App;
