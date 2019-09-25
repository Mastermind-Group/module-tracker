import React, { useEffect } from 'react'
import { Checkbox, Paper, Grid } from '@material-ui/core'

import { Item } from './styles'
import { Flex } from '../GlobalStyles'
import Swal from 'sweetalert2'
import avatar from '../Images/avataaars.png'

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

	return (

		<Flex column>
			<div style={{ marginBottom: '30px' }}>
				<img
					alt="Avatar"
					src={avatar}
					style={{
						height: '200px',
						width: '200px',
						marginBottom: '30px'
					}}
				/>
				<p>Learning Individual</p>

			</div>

			<Flex column control={50}>
				<Grid container spacing={8}>

					<Grid item xs={12}>
						<Paper
							style={{ padding: '10px', margin: '5px', background: 'darkblue', color: 'white' }}
						>
							Career Goal Checkup
							</Paper>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Item>
							<b>SMART Goals</b>
						</Item>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Item>
							<b>Stats</b>
						</Item>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Item>
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
						</Item>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Paper style={{ padding: '23px 10px', margin: '5px' }}>
							Lessons: 12/12
							</Paper>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Item>
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
						</Item>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Paper style={{ padding: '23px 10px', margin: '5px' }}>
							All Training: Complete
							</Paper>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Item>
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
						</Item>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Paper style={{ padding: '23px 10px', margin: '5px' }}>
							Profile: *In Progress*
							</Paper>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Item>
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
						</Item>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Paper
							style={{
								padding: '10px',
								margin: '5px',
								visibility: 'hidden'
							}}
						/>
					</Grid>

				</Grid>
			</Flex>
		</Flex>

	)

}

export default Profile
