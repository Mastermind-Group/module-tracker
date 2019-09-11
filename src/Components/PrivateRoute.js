import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import decode from 'jwt-decode'
import { AdminDashboard, Dashboard } from './Dashboards'


const PrivateRoute = ({ ...rest }) => {

    console.log(rest)

    const token = Cookies.get('token')
    const decoded = token && decode(token)

    if (!token || Date.now() > decoded.exp * 1000) Cookies.set('location', rest.location.pathname)

    return (
        <Route {...rest} render={props => {
            return (!token || Date.now() > decoded.exp * 1000) ?
                <Redirect to="/" />
                :
                decoded.role === 'Admin' ?
                    <AdminDashboard {...props} admin={true} />
                    :
                    <Dashboard {...props} admin={false} />
        }} />
    )

}


export default PrivateRoute
