import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableHead, TableRow, Paper, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { StyledTableCell, useStyles } from './styles'
import { getJobs, addJob, updateJob, delJob } from '../../Actions'
import Job from './Job'
import Modal from './Modal'

function AppliedJobs(props) {

  const [show, setShow] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [rows, setRows] = useState(props.jobs)
  const [newRow, setNewRow] = useState(null)
  const [editRow, setEditRow] = useState({ bool: false })

  useEffect(() => {

    props.jobs.length !== 0 &&
      setUpdated(true)

  }, [props.jobs])

  useEffect(() => {

    if (!updated || newRow || editRow.bool) {

      if (newRow) {

        if (editRow.bool) {

          props.updateJob(newRow)
          setNewRow(null)
          setEditRow({
            bool: false,
            row: {
              company: '',
              position: '',
              location: '',
              applied: null,
              interview: null,
              offer: null
            }
          })
          setUpdated(false)

        } else {

          props.addJob(newRow)
          setNewRow(null)
          setUpdated(false)

        }

      } else props.getJobs()

    } else setRows(props.jobs)

  }, [updated, newRow])

  const classes = useStyles()

  return (

    <div>

      <Modal
        show={show}
        setShow={setShow}
        setNewRow={setNewRow}
        editRow={editRow}
        setEditRow={setEditRow}
      />

      <p style={{ marginBottom: '30px' }}>A job search log is a great way to set goals and keep motivated to achieve them. You can look back and see how many jobs and for what positions you have applied for. This can also help you to see where you were successful and where you may need some improvements with your job search tools.</p>

      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Company
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Position
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Location
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Applied
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Interview
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Offer
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Delete/Edit
                  </StyledTableCell>

              </TableRow>
            </TableHead>

            <TableBody>

              {rows && rows.map((row, index) => <Job
                row={row}
                setUpdated={setUpdated}
                setEditRow={setEditRow}
                setShow={setShow}
                setRows={setRows}
                rows={rows}
                key={index * Math.random()}
              />)}

            </TableBody>
          </Table>
        </Paper>
      </div>

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => setShow(!show)}
        style={{
          marginTop: '40px',
          float: 'right'
        }}>
        <AddIcon />
      </Fab>

    </div>

  )

}

const mapStateToProps = state => ({
  jobs: state.jobs
})

export default connect(
  mapStateToProps, {
    getJobs,
    addJob,
    updateJob,
    delJob
  })(AppliedJobs)
