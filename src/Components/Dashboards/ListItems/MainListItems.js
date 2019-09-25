import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { IconButton } from '../styles'

export default props => {

    return <>

        {!props.admin &&
            <IconButton open={props.open} list>
                <Link style={{ textDecoration: 'none' }} to="/dashboard/profile">
                    <FontAwesomeIcon icon='home' />  <strong>Profile</strong>
                </Link>
            </IconButton>
        }

        {!props.admin &&
            <IconButton open={props.open} list>
                <Link style={{ textDecoration: 'none' }} to="/dashboard/assignments">
                    <FontAwesomeIcon icon='clipboard-list' />  <strong>Assignments</strong>
                </Link>
            </IconButton>
        }

        <IconButton open={props.open} list>
            <Link style={{ textDecoration: 'none' }} to={props.admin ? '/admin/dashboard/calendar' : "/dashboard/calendar"}>
                <FontAwesomeIcon icon='calendar-alt' />  <strong>Calendar</strong>
            </Link>
        </IconButton>

        {!props.admin &&
            <IconButton open={props.open} list>
                <Link style={{ textDecoration: 'none' }} to="/dashboard/applied-jobs">
                    <FontAwesomeIcon icon='briefcase' />  <strong>Applied Jobs</strong>
                </Link>
            </IconButton>
        }

        <IconButton open={props.open} list>
            <Link style={{ textDecoration: 'none' }} to={props.admin ? '/admin/dashboard/endorsement' : "/dashboard/endorsement"}>
                <FontAwesomeIcon icon='id-badge' />  <strong>Endorsement</strong>
            </Link>
        </IconButton>
    </>

}