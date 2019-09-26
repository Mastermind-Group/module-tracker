import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../Images/avataaars.png'
import { GlobalTop, IconButton, GlobalHeader, Avatar } from '../styles'
import Logo from '../../Images/logo.png'


export default props => {

    return <GlobalTop>
        <IconButton open>
            <FontAwesomeIcon
                icon={props.open ? 'chevron-left' : 'bars'}
                onClick={props.handleDrawer}
            />
        </IconButton>

        <GlobalHeader><img src={Logo} alt="Leaf" /> Element Learning</GlobalHeader>

        <IconButton>
            <Avatar
                alt="Avatar"
                src={avatar}
            />
        </IconButton>

    </GlobalTop>

}
