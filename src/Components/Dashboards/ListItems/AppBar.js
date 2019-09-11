import React from 'react'
import { Badge, Typography, Toolbar, AppBar, IconButton } from '@material-ui/core'
import moment from 'moment-timezone'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'

import Logo from '../../Images/Lambda_Logo_White.png'

export default props => {

    return <AppBar
        position="absolute"
        // color="secondary"
        className={classNames(props.classes.appBar, props.open &&
            props.classes.appBarShift)}
    >
        <Toolbar disableGutters={!props.open} className={props.classes.toolbar}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={props.handleDrawer}
                className={classNames(props.classes.menuButton, props.open && props.classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>

            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={props.classes.title}
            >
                <img
                    alt="Lambda Logo"
                    src={Logo}
                    style={{
                        height: 'auto',
                        width: '100px'
                    }} />
                <p> {moment().tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </Typography>

            <IconButton color="inherit">
                <Badge
                    badgeContent={1}
                    color={props.admin ? 'secondary' : 'primary'}
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>

}
