import React from 'react'

const AssignmentCheck = props => {

	return (
		<div
			style={{
				color: props.complete ? 'green' : 'black',
				textDecoration: props.complete ? 'line-through' : 'none',
				textAlign: 'left',
				height: 'auto',
				margin: '10px'
			}}
		>
			<span
				style={{
					width: '100%',
					fontSize: '13px'
				}}
			>{props.assignment}</span>

			{props.url &&
				<a
					href={props.url}
					target='_blank'
					rel='noopener noreferrer'
				>{props.url}</a>}
		</div>
	)
}

export default AssignmentCheck
