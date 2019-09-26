import React from 'react'
import { Link } from 'react-router-dom'

import { ProfileMenu } from '../styles'

const Dropdown = props => {

    return (

        <ProfileMenu visible={props.visible}>

            <Link to='/dashboards/profile'>View Profile</Link>

            <Link to='/dashboards/profile/edit'>Edit Profile</Link>

        </ProfileMenu>

    )

}

export default Dropdown
