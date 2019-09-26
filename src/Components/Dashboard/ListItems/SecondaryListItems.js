import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import blockstack from 'blockstack'
import Cookies from 'js-cookie'

import { IconButton } from '../styles'
import { colors } from '../../../GlobalStyles'


export default props => {

    function handleLogOut() {
        Swal.fire({
            title: 'Are you sure you want to log out?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: colors.pbg,
            cancelButtonColor: colors.accent,
            confirmButtonText: 'Yes, log me out!'
        })
            .then((res) => {
                if (res.value) {
                    Cookies.remove('creds')
                    Cookies.remove('token')
                    Cookies.set('location', window.location.pathname)
                    blockstack.signUserOut()
                    props.history.push('/')
                }
            })
    }

    return <>

        <IconButton list open={props.open} onClick={handleLogOut}>
            <FontAwesomeIcon icon='sign-out-alt' style={{ transform: 'rotate(180deg)' }} />  <strong>Log Out</strong>
        </IconButton>

        <IconButton list open={props.open}>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/feedback">
                <FontAwesomeIcon icon='comment-alt' />  <strong>Feedback</strong>
            </Link>
        </IconButton>

    </>

}
