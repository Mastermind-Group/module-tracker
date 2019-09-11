export default theme => {

    return ({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing.unit * 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        avatar: {
            margin: theme.spacing.unit,
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing.unit,
        },
        submit: {
            marginTop: theme.spacing.unit * 6,
            border: '1px solid #BB1333',
            background: '#BD002F',
            '&:hover': {
                background: '#BB1333',
                color: '#fff',
                transition: '0.7s',
                transform: 'scale(1.04)',
            },
            color: '#fff',
            fontSize: 14,
        },
        // main: {
        //     width: 'auto',
        //     display: 'block',
        //     marginLeft: theme.spacing.unit * 3,
        //     marginRight: theme.spacing.unit * 3,
        //     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        //         width: 400,
        //         marginLeft: 'auto',
        //         marginRight: 'auto',
        //     },
        // },
        // paper: {
        //     marginTop: theme.spacing.unit * 8,
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        // },
        // avatar: {
        //     margin: theme.spacing.unit,
        //     backgroundColor: theme.palette.secondary.main,
        // },
        // form: {
        //     width: '100%',
        //     marginTop: theme.spacing.unit,
        // },
        // submit: {
        //     marginTop: theme.spacing.unit * 3,
        // },
    })

}