import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import decode from 'jwt-decode'
import Dashboard from './Dashboard'
import { initBlockstack } from 'react-blockstack'
import { AppConfig } from 'blockstack'



const PrivateRoute = ({ ...rest }) => {

    const token = Cookies.get('token')
    const decoded = token && decode(token)

    if (!token || Date.now() > decoded.exp * 1000) {
        Cookies.set('location', rest.location.pathname)
        localStorage.clear()
        const appConfig = new AppConfig(["store_write"])
        initBlockstack(appConfig)
    }

    return (
        <Route {...rest} render={props => {
            return (!token || Date.now() > decoded.exp * 1000) ?
                <Redirect to="/" /> :
                <Dashboard {...props} admin={false} />
        }} />
    )

}


export default PrivateRoute
