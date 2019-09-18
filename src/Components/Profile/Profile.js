import React, { useEffect } from 'react'
import { useStyles } from './styles'
import avatar from '../Images/avataaars.png'

import './profile.scss'

const Profile = props => {

	const classes = useStyles()

	return (

		<div style={{ marginBottom: '100px' }}>
			<div style={{ marginBottom: '30px' }}>
				<img
					alt="Pirate Josh Knell"
					title="Pirate Josh Knell"
					src={avatar}
					style={{
						height: '200px',
						width: '200px',
						marginBottom: '30px'
					}}
				/>


			</div>
			<div>
				<ul>
					<li>Employee Name: Learning Individual</li>
					<li>Employee Id: 8675309</li>
					<li>Hire Date: 9/18/2019</li>
				</ul>
			</div>


		</div>

	)

}

export default Profile
