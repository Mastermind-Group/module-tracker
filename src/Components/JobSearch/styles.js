import { TableCell, TableRow } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/styles'
import { variables } from '../../Utilities'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: variables.lambdaBlue,
        color: 'white',
        fontSize: '12px'
    },
    body: {
        fontSize: 14
    }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'white'
        }
    }
}))(TableRow)

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    },
    fab: {
        background: '#BB1433'
    },
}))

export { StyledTableCell, StyledTableRow, useStyles }
