import React, { useEffect } from 'react'
import { useStyles } from './styles'
<<<<<<< HEAD
=======
import { assignments } from '../Assignments'
import { Flex } from '../GlobalStyles'
import Accord from '../Accordian'
import Swal from 'sweetalert2'
>>>>>>> f29db6a381ab0cbc918ada4529176fc2f7a95f14
import avatar from '../Images/avataaars.png'

const Profile = props => {

	const classes = useStyles()

	return (

		<Flex column>
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
<<<<<<< HEAD
=======
				<p>Learning Individual</p>

			</div>

			<Flex column>
				<div
					style={{
						width: '48%',
						marginTop: '5px'
					}}
					className="smart-goals">
					<Grid container spacing={8}>

						<Grid item xs={12}>
							<Paper
								className={classes.paper}
								style={{ padding: '10px', margin: '5px', background: '#BB1333', color: 'white' }}
							>
								Career Goal Checkup
							</Paper>
						</Grid>
>>>>>>> f29db6a381ab0cbc918ada4529176fc2f7a95f14


			</div>
			<div>
				<ul>
					<li>Employee Name: Learning Individual</li>
					<li>Employee Id: 8675309</li>
					<li>Hire Date: 9/18/2019</li>
				</ul>
			</div>


<<<<<<< HEAD
		</div>
=======
				<div style={{ width: '48%' }} className="profile-assignments">
					{assignments.length && assignments.map((assignment, index) => (
						<Accord
							key={index}
							assigns={assignment.assigns}
							title={assignment.name}
							link={assignment.link}
						/>
					))}
				</div>
			</Flex>
		</Flex>
>>>>>>> f29db6a381ab0cbc918ada4529176fc2f7a95f14

	)

}

export default Profile
