import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home'
import User from './User'
import NotFound from './NotFound'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">to Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">to User</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route path="/user" component={User} />
        <Route
          component={NotFound}
        />
      </Switch>
    </div>
  )
}

export default App

