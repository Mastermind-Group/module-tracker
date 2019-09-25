import styled from 'styled-components'

import { colors } from '../../../../GlobalStyles'

export const Form = styled.form`
    display: ${props => props.selectDate ? 'flex' : 'none'};
    margin: 1vh auto 0;
    width: max-content;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    input {
        position: relative;
        left: 15px;
        border: none;
        cursor: pointer;
        background: whitesmoke;
        color: ${colors.primary};

        &:focus {
            outline: none;
        }

        &::-webkit-clear-button {
            display: none;
        }

        &::-webkit-calendar-picker-indicator {
            display: none;
        }
    }

    button {
        border: none;
        border-radius: 50px;
        background: ${colors.primary};
        margin: 12.5px auto 0;
        color: whitesmoke;
        width: max-content;
        cursor: pointer;
        transition: .3s ease;

        &:hover{
            transform: scale(1.1);
        }
    }
`,
    Button = styled.button`
        border: none;
        border-radius: 50px;
        background: ${colors.primary};
        margin: 12.5px auto 0;
        color: whitesmoke;
        width: max-content;
        cursor: pointer;
        transition: .3s ease;
        display: ${props => props.selectDate ? 'none' : 'block'};

        &:hover{
            transform: scale(1.1);
        }
    `
