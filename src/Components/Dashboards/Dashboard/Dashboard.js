import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { IconButton, Divider, Drawer, CssBaseline, withStyles } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Applied from '../../JobSearch'
import AssignmentList, { ComingSoon, ColdOutreach } from '../../Assignments'
import Profile from '../../Profile'
import Endorsement from '../../EndorsementChecklist'
import styles from './styles'
import { MainListItems, SecondaryListItems, AppBar } from '../ListItems'
import Calendar from '../../Calendar'
import Feedback from '../../Feedback'

const Dashboard = props => {

	const [open, setOpen] = useState(true)

	const handleDrawer = () => setOpen(!open)

	useEffect(() => { open && setTimeout(() => { handleDrawer() }, 5000) }, [open])

	const { classes } = props

	return (

		<div className={classes.root}>
			<CssBaseline />

			<AppBar {...props}
				classes={classes}
				open={open}
				handleDrawer={handleDrawer}
			/>

			<Drawer
				variant="permanent"
				classes={{
					paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={() => handleDrawer()}>
						<ChevronLeftIcon />
					</IconButton>
				</div>

				<Divider />

				<MainListItems />

				<Divider />

				<SecondaryListItems admin={props.admin} history={props.history} />
			</Drawer>

			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Switch>
					<Route path='/dashboard/profile' component={Profile} />
					<Route path='/dashboard/assignments' component={AssignmentList} />
					<Route path='/dashboard/calendar' component={Calendar} />
					<Route path='/dashboard/endorsement' component={Endorsement} />
					<Route path='/dashboard/applied-jobs' component={Applied} />
					<Route path='/dashboard/cold-outreach' component={ColdOutreach} />
					<Route path='/dashboard/coming-soon' component={ComingSoon} />
					<Route path='/dashboard/feedback' component={Feedback} />
				</Switch>
			</main>

			<CookieConsent
				location="bottom"
				enableDeclineButton={true}
				// debug={true}
				declineButtonText="I decline"
				buttonText="I understand"
				cookieName="cookieConsent"
				style={{ background: '#BB1333', marginBottom: '15px' }}
				buttonStyle={{ color: '#BB1333', fontSize: '13px', background: 'white' }}
				expires={150}
			>
				This website uses cookies to enhance the user experience. <span style={{ fontSize: '10px' }} />
			</CookieConsent>
		</div>

	)

}

export default withStyles(styles)(Dashboard)
