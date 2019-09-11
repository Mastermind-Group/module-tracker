import React from 'react'
import DeleteIcon from '@material-ui/icons/DeleteForeverSharp'
import EditIcon from '@material-ui/icons/CreateSharp'
import { connect } from 'react-redux'

import { StyledTableCell, StyledTableRow } from './styles'
import { delJob } from '../../Actions'

const Job = props => {
    return (
        <StyledTableRow>

            <StyledTableCell component="th" scope="row">
                {props.row.company}
            </StyledTableCell>

            <StyledTableCell align="center">
                {props.row.position}
            </StyledTableCell>

            <StyledTableCell align="center">
                {props.row.location}
            </StyledTableCell>

            <StyledTableCell align="center">
                {props.row.applied === true ? 'Yes' : 'No'}
            </StyledTableCell>

            <StyledTableCell align="center">
                {props.row.interview === true ? 'Yes' : 'No'}
            </StyledTableCell>

            <StyledTableCell align="center">
                {props.row.offer === true ? 'Yes' : 'No'}
            </StyledTableCell>

            <StyledTableCell align="center">
                <DeleteIcon
                    cursor='pointer'
                    onClick={() => {
                        props.delJob(props.row._id)
                        props.setUpdated(false)
                        props.setRows(...props.rows.filter(roww => roww._id !== props.row._id))
                    }}
                />
                <span style={{ fontSize: '35px' }}>|</span>
                <EditIcon style={{ fontWeight: 'lighter' }}
                    cursor='pointer'
                    onClick={() => {
                        props.setShow(true)
                        props.setEditRow({ bool: true, row: props.row })
                    }} />
            </StyledTableCell>

        </StyledTableRow>
    )
}

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps, { delJob }
)(Job)
