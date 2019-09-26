import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GlobalTop, IconButton, GlobalHeader, Avatar } from '../styles'
import Dropdown from './Dropdown'
import avatar from '../../Images/avataaars.png'
import Logo from '../../Images/logo.png'


export default props => {

    const [visible, setVisible] = useState(false)

    return <GlobalTop>
        <IconButton open>
            <FontAwesomeIcon
                icon={props.open ? 'chevron-left' : 'bars'}
                onClick={props.handleDrawer}
            />
        </IconButton>

        <GlobalHeader><img src={Logo} alt="Leaf" /> Element Learning</GlobalHeader>

        <IconButton onClick={_ => setVisible(!visible)}>
            <Avatar
                alt="Avatar"
                src={avatar}
            />
            <Dropdown visible={visible} />
        </IconButton>

    </GlobalTop>

}
