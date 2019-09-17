import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'

import LogIn from './Components/LogIn'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'

const App = props => {

  window.addEventListener('beforeunload', () => Cookies.remove('location'))

  return (

    <div className="App">
      <Switch>

        <Route exact path="/"
          render={props => <LogIn {...props} />} />

        <Route path="/register"
          component={Register}
        />

        <PrivateRoute path="/dashboard" />

        <Route
          exact path='/admin'
          render={props => <Register {...props} admin={true} />}
        />

        <PrivateRoute path="/admin/dashboard" />

      </Switch>
    </div>

  )
}

export default App
