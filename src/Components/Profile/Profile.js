import React, { useEffect } from 'react'
import { Checkbox, Paper, Grid } from '@material-ui/core'

import { Item, Header } from './styles'
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

			<Flex column spaceAA>

				<Header>Career Goal Checkup</Header>

				<Flex wrap control='50%' startA>

					<Flex column control='48%'>

						<Item><b>SMART Goals</b></Item>

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

					</Flex>

					<Flex column control='48%'>

						<Item><b>Stats</b></Item>

						<Item>Lessons: 12/12</Item>

						<Item>All Training: Complete</Item>

						<Item>Profile: *In Progress*</Item>

					</Flex>

				</Flex>
			</Flex>
		</Flex>

	)

}

export default Profile
