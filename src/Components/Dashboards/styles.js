import styled from 'styled-components'
import { colors } from '../GlobalStyles'

export default theme => ({
    root: {
        display: 'flex',

    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        minHeight: 56,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        backgroundColor: '#BB1333'
    },
    appBarShift: {
        marginLeft: 200,
        width: 'calc(100% - 200px)',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whitesmokeSpace: 'nowrap',
        width: 200,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        zIndex: 0,
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 'max-content',
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
})

export const Global = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 50;
    margin-left: ${props => props.open ? '200px' : '0'};
    transition: .3s ease;
`,
    GlobalTop = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 50px;
        background: whitesmoke;
        padding: 8px 20px;
        width: 100%
        border-bottom: 1px solid ${colors.accent};
    `,
    IconButton = styled.p`
        transition: .3s ease;
        padding: 0 10px;
        cursor: pointer;
        border-radius: 15px;
        margin: ${props => props.open ? '10px 7.5px' : props.list ? '10px auto' : 'auto 0'};

        &:hover {
            background: ${colors.sbg}10;
        }

        svg {
            font-size: 2.5rem;
        }

        strong {
            display: ${props => props.open ? 'inline' : 'none'};
            font-size: 1.5rem;
        }
    `,
    Drawer = styled.div`
        margin-top: 135px;
        padding-left: ${props => props.open ? '10px' : 'auto'};
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: no-wrap;
        width: ${props => props.open ? '200px' : '70px'};
        height: 100%;
        transition: .3s ease;
        overflow-x: hidden;
        background: whitesmoke;
        border-right: 1px solid ${colors.accent}
    `,
    GlobalHeader = styled.h2`
        color: ${colors.primary};
        margin: 8px 0;
        font-weight: bolder;

        img {
            width: 40px;
            margin: 0;
            transform: translate(0, -2.5px);
        }
    `,
    Content = styled.main`
        margin-top: 135px;
        display: flex;
        justify-content: center;
        overflow: auto;
        flex-grow: 1;
        padding: 3rem;
        min-height: 100vh;
        margin-left: ${props => props.open ? '200px' : '0'};
        ${props => console.log(props)}
        width: ${props => props.open ? 'calc(100%-200px)' : '100%'};
    `
