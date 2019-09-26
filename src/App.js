import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronLeft, faBell, faHome, faClipboardList, faCalendarAlt, faBriefcase, faIdBadge, faCommentAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { LogIn, Register } from './Components/LogIn'
import PrivateRoute from './Components/PrivateRoute'

import Global, { Flex } from './GlobalStyles'

const App = _ => {

  window.addEventListener('beforeunload', () => {
    Cookies.remove('location')
    localStorage.clear()
  })
  library.add(faBars, faChevronLeft, faBell, faHome, faClipboardList, faCalendarAlt, faBriefcase, faIdBadge, faCommentAlt, faSignOutAlt)

  return (

    <Flex global>
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
