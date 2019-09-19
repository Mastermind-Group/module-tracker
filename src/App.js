import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'

import { LogIn, Register } from './Components/LogIn'
import PrivateRoute from './Components/PrivateRoute'

import Global, { Flex } from './Components/GlobalStyles'

const App = props => {

  window.addEventListener('beforeunload', () => Cookies.remove('location'))

  return (

    <Flex column container>
      <Global />
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
    </Flex>

  )
}

export default App
