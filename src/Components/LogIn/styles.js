import styled from 'styled-components'
import { buttonSize, colors } from '../GlobalStyles'

export default theme => ({

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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },

})

export const scomp = {

    Oauth: styled.img`
        width: 40px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 360px;
        margin: 20px auto;

        &:hover {
            box-shadow: 0 4px 9px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.22);  
        }
    `,
    Login: styled.div`
        display: flex;
        margin-top: 50px;
        background: white;
        box-shadow: 5px 5px 3px #00000050;
        flex-direction: column;
        padding: 3rem;
        align-items: center;
        border-radius: 5px;
    `,
    SignInButton: styled.button`
        width: 100%;
        padding: ${buttonSize.medium};
        color: white;
        background: ${colors.sbg};

        &:hover {
            transform: scale(1.03);
        }
    `

}
