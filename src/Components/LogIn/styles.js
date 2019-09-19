import styled from 'styled-components'
import { buttonSize, colors } from '../GlobalStyles'

const Login = styled.div`
        display: flex;
        background: white;
        box-shadow: 5px 5px 3px #00000050;
        flex-direction: column;
        padding: 3rem;
        align-items: center;
        border-radius: 5px;
        width: 425px;
        max-height: 100vh || max-content;
    `,
    Oauth = styled.img`
        width: 40px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 360px;
        margin: 20px auto;

        &:hover {
            box-shadow: 0 4px 9px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.22);  
        }
    `,
    SignInButton = styled.button`
        width: 100%;
        padding: ${buttonSize.medium};
        color: white;
        background: ${colors.sbg};

        &:hover {
            transform: scale(1.03);
        }
    `,
    LogoImg = styled.img`
        width: 25vh;
    `

export {
    Oauth,
    Login,
    SignInButton,
    LogoImg,
}
