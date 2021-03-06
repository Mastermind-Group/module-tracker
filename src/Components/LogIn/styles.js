import styled from 'styled-components'
import { buttonSize, colors } from '../../GlobalStyles'

const Login = styled.div`
        display: flex;
        background: whitesmoke;
        box-shadow: 5px 5px 3px #00000050;
        flex-direction: column;
        padding: 3rem;
        align-items: center;
        border-radius: 5px;
        width: 425px;
        max-height: 100vh || max-content;
    `,
    SignInButton = styled.button`
        width: 100%;
        padding: ${buttonSize.medium};
        color: ${colors.secondary};
        background: ${colors.sbg};

        &:hover {
            transform: scale(1.03);
        }
    `,
    LogoImg = styled.img`
        width: 25vh;
    `,
    EmailForm = styled.div`
        display: inline-flex;
        flex-direction: column;
        position: relative;
        vertical-align: top;
        margin-top: 16px;
        margin-bottom: 8px;
        width: 100%;
        font-size: 1.4rem;

        label {
            color: ${colors.accent};
            transform: ${props => props.focused ? '' : 'translate(.5rem, 2.4rem)'};
            transition: .3s ease;
        }

        input {
            position: relative;
            border: 0;
            border-bottom: 1.5px solid ${colors.accent};
            outline: none;
            background: transparent;
            padding-left: .5rem;
            color: ${colors.primary};
        }
    `,
    LinkButton = styled.button`
        display: inline;
        background: none;
        padding: none;
        outline: none;
        margin: none;
        border: none;
        font-size: 1.4rem;
        color: #337ab7;
        transition: 0s;
        transform: translate(0, 1px);

        &:hover {
            transform: none;
            text-decoration: underline;
            transform: translate(0, 1px);
            color: #23527c;
        }
    `,
    ToP = styled.p`
        margin-top: 35px;
    `

export {
    Login,
    SignInButton,
    LogoImg,
    EmailForm,
    LinkButton,
    ToP
}
