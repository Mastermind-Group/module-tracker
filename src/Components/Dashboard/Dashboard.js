import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'

import { MainListItems, SecondaryListItems, Top } from './ListItems'
import Calendar from '../Calendar'
import Feedback from '../Feedback'

import { colors } from '../../GlobalStyles'
import { Content, Drawer } from './styles'

const Dashboard = props => {

	const [open, setOpen] = useState(true)

	const handleDrawer = () => setOpen(!open)

	useEffect(() => { open && setTimeout(() => { handleDrawer() }, 20000) }, [open])

	return <>

		<Top
			open={open}
			handleDrawer={handleDrawer}
		/>

		<Drawer open={open}>

			<MainListItems open={open} />

			<hr style={{
				backgroundColor: colors.accent,
				height: 1,
				width: '120%',
				marginLeft: -10,
			}} />

			<SecondaryListItems
				open={open}
				admin={props.admin}
				history={props.history}
			/>

		</Drawer>

		<Content open={open}>
			<Switch>
				<Route path='/dashboard/profile' />
				<Route path='/dashboard/assignments' />
				<Route path='/dashboard/calendar' component={Calendar} />
				<Route path='/dashboard/endorsement' />
				<Route path='/dashboard/feedback' component={Feedback} />
			</Switch>

			<CookieConsent
				flipButtons={true}
				location='none'
				enableDeclineButton={true}
				// debug={true}
				declineButtonText="Decline"
				buttonText="Accept"
				cookieName="cookieConsent"
				style={{
					background: colors.sbg,
					marginBottom: '15px',
					width: 'max-content',
					position: 'fixed',
					bottom: '15px',
					left: 'auto',
					right: '15px',
					borderRadius: '15px',
					fontSize: '20px',
				}}
				buttonStyle={{
					color: colors.primary,
					background: 'whitesmoke',
					borderRadius: '5px',
				}}
				declineButtonStyle={{
					color: 'orange',
					background: 'red',
					borderRadius: '5px',
				}}
				expires={150}
			>This website uses cookies to enhance the user experience.
			</CookieConsent>

		</Content>

	</>

}

export default Dashboard
