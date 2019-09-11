import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Tooltip, List } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/ExitToApp'
import FeedbackIcon from '@material-ui/icons/FeedbackOutlined'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import Cookies from 'js-cookie'

export default props => {

    function handleLogOut() {
        Swal.fire({
            title: 'Are you sure you want to log out?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#BB1333',
            confirmButtonText: 'Yes, log me out!'
        })
            .then((res) => {
                if (res.value) {
                    Cookies.remove('creds')
                    Cookies.remove('token')
                    Cookies.set('location', window.location.pathname)
                    props.history.push('/')
                }
            })
    }

    return <List>
        <div>
            <ListItem button onClick={handleLogOut}>
                <ListItemIcon>
                    <Tooltip title='LogOut' placement='right'>
                        <CancelIcon style={{ transform: 'rotate(180deg)' }} />
                    </Tooltip>
                </ListItemIcon>
                <ListItemText primary="Log Out" />
            </ListItem>

            <Link style={{ textDecoration: 'none' }} to="/dashboard/feedback">
                <ListItem button>
                    <ListItemIcon style={{ color: "#bb1333" }}>
                        <Tooltip title='User Feedback' placement='right'>
                            <FeedbackIcon />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Feedback" />
                </ListItem>
            </Link>

        </div>
    </List>

}
