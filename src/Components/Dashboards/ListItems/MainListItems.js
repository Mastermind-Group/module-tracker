import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Tooltip, List } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import CalendarIcon from '@material-ui/icons/DateRangeOutlined'
import CheckIcon from '@material-ui/icons/VerifiedUserOutlined'
import AppliedIcon from '@material-ui/icons/WorkOutline'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'

export default props => {

    return <List>
        <div>

            {!props.admin && (<Link style={{ textDecoration: 'none' }} to="/dashboard/profile">
                <ListItem button >
                    <ListItemIcon style={{ color: "#bb1333" }}>
                        <Tooltip title="Home" placement='right'>
                            <HomeIcon />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </Link>)}

            {!props.admin && (<Link style={{ textDecoration: 'none' }} to="/dashboard/assignments">
                <ListItem button >
                    <ListItemIcon style={{ color: "#bb1333" }}>
                        <Tooltip title="Training Modules" placement='right'>
                            <AssignmentIcon />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Training Modules" />
                </ListItem>
            </Link>)}

            <Link style={{ textDecoration: 'none' }} to={props.admin ? '/admin/dashboard/calendar' : "/dashboard/calendar"}>
                <ListItem button>
                    <ListItemIcon style={{ color: "#bb1333" }}>
                        <Tooltip title='Calendar' placement='right'>
                            <CalendarIcon />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                </ListItem>
            </Link>

            {!props.admin && (<Link style={{ textDecoration: 'none' }} to="/dashboard/applied-jobs">
                <ListItem button>
                    <ListItemIcon style={{ color: "#bb1333" }}>
                        <Tooltip title='Job Tracker' placement='right'>
                            <AppliedIcon />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Job Tracker" />
                </ListItem>
            </Link>)}

            <Link style={{ textDecoration: 'none' }} to={props.admin ? '/admin/dashboard/endorsement' : "/dashboard/endorsement"}>
                <ListItem button>
                    <ListItemIcon style={{ color: "#bb1333" }}>
                        <Tooltip title='Endorsement Verification' placement='right'>
                            <CheckIcon />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Endorsement " />
                </ListItem>
            </Link>
        </div>
    </List>

}