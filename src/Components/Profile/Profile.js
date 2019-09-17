import React, { useEffect } from 'react'
import { Checkbox, Paper, Grid } from '@material-ui/core'

import { useStyles } from './styles'
import { assignments } from '../Assignments'
import Accord from '../Accordian'
import Swal from 'sweetalert2'
import avatar from '../Images/avataaars.png'

import './profile.scss'

const Profile = props => {

	const [checkState, setCheckState] = React.useState({
		checkedA: false,
		checkedB: false,
		checkedC: false,
		checkedD: false
	})

	const handleChange = name => event => {
		event.stopPropagation()
		setCheckState({ ...checkState, [name]: event.target.checked })
	}

	useEffect(() => {
		const success = () => {
			Swal.fire({
				type: 'success',
				title: 'Wow!',
				text: 'You Have Completed Your Goals',
				footer: '<a href>Keep Up The Great Work!!!</a>'
			})
		}
		if (checkState.checkedA &&
			checkState.checkedB &&
			checkState.checkedC &&
			checkState.checkedD)
			success()

	}, [checkState])

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
				<p>Learning Individual</p>

			</div>

			<div
				style={{ display: 'flex' }}
				className="profile"
			>
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

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '10px', margin: '5px' }}>
								<b>SMART Goals</b>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '10px', margin: '5px' }}>
								<b>Stats</b>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '10px', margin: '5px' }}>
								Goal #1{' '}
								<Checkbox
									checked={checkState.checkedA}
									onChange={handleChange('checkedA')}
									value="checkedA"
									color="primary"
									inputProps={{
										'aria-label': 'secondary checkbox'
									}}
								/>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '23px 10px', margin: '5px' }}>
								Lessons: 12/12
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '10px', margin: '5px' }}>
								Goal #2{' '}
								<Checkbox
									checked={checkState.checkedB}
									onChange={handleChange('checkedB')}
									value="checkedB"
									color="primary"
									inputProps={{
										'aria-label': 'secondary checkbox'
									}}
								/>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '23px 10px', margin: '5px' }}>
								All Training: Complete
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '10px', margin: '5px' }}>
								Goal #3{' '}
								<Checkbox
									checked={checkState.checkedC}
									onChange={handleChange('checkedC')}
									value="checkedC"
									color="primary"
									inputProps={{
										'aria-label': 'secondary checkbox'
									}}
								/>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '23px 10px', margin: '5px' }}>
								Profile: *In Progress*
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper} style={{ padding: '10px', margin: '5px' }}>
								Goal #4{' '}
								<Checkbox
									checked={checkState.checkedD}
									onChange={handleChange('checkedD')}
									value="checkedD"
									color="primary"
									inputProps={{
										'aria-label': 'secondary checkbox'
									}}
								/>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Paper
								className={classes.paper}
								style={{
									padding: '10px',
									margin: '5px',
									visibility: 'hidden'
								}}
							/>
						</Grid>

					</Grid>
				</div>

				<div style={{ width: '48%' }} className="profile-assignments">
					{assignments.map((assignment, index) => (
						<Accord
							key={index}
							assigns={assignment.assigns}
							title={assignment.name}
							link={assignment.link}
						/>
					))}
				</div>
			</div>
		</div>

	)

}

export default Profile
