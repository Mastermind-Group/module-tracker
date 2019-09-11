import React from 'react'
import { Link } from 'react-router-dom'
import { ExpansionPanelSummary, ExpansionPanel, ExpansionPanelDetails, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useStyles } from './styles'
import { AssignmentCheck } from '../Assignments'

export default function Accord(props) {
	console.log(props)
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading} style={{ fontSize: '16px' }}>
						{props.title}
					</Typography>
				</ExpansionPanelSummary>

				<ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column' }}>

					{props.assigns.map((assignment, index) => (
						<AssignmentCheck
							key={index}
							complete={assignment.complete}
							url={assignment.url}
							assignment={assignment.name}
						/>
					))}

					<Link style={{ color: '#BB1333' }} to={`${props.link}`}>
						<p style={{ fontSize: '10px' }}>
							Go To Module
						</p>
					</Link>

				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}
