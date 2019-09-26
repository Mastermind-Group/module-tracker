import styled from 'styled-components'
import { colors } from '../../../../../GlobalStyles'

export const ModalContainer = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: #00000099;
    z-index: 1;
    justify-content: center;
    align-items: center;
`,
    ModalMain = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: whitesmoke;
      width: 30%;
      height: auto;
    `,
    Button = styled.button`
        margin-top: 25px;
        background: ${colors.primary};
        color: whitesmoke;
        border: none;
        border-radius: 5px;
        padding: 7px;
        margin-bottom: 15px;
    `
