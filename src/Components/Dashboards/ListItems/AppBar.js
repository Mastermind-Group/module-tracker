import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GlobalTop, IconButton, GlobalHeader } from '../styles'
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

        <IconButton open>
            <FontAwesomeIcon icon='bell' />
        </IconButton>
    </GlobalTop>

}
