import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

const drawerWidth = props => props.open ? '200px' : '70px'

export const GlobalTop = styled.div`
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        box-sizing: border-box;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 50px;
        background: whitesmoke;
        padding: 0 20px 5px 5px;
        width: 100%;
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
        padding-left: ${props => props.open ? '10px' : 'auto'};
        position: fixed;
        top: 73px;
        left: 0;
        z-index: 49;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: no-wrap;
        width: ${props => drawerWidth(props)};
        min-height: 100vh;
        border-radius: 0 0 100% 0;
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
            width: 50px;
            margin: 0;
            transform: translate(0, -2.5px);
        }
    `,
    Content = styled.main`
        position: absolute;
        top: 73px;
        left: ${props => drawerWidth(props)};
        display: flex;
        justify-content: center;
        overflow: auto;
        flex-grow: 1;
        padding: 3rem;
        min-height: 70vh;
        width: ${props => props.open ? '84vw' : '93vw'};
        justify-self: center;
        transition: .3s ease;
    `,
    Avatar = styled.img`
        width: 50px;
        align-self: center;
    `,
    ProfileMenu = styled.div`
        position: absolute;
        z-index: 500;
        display: ${props => props.visible ? 'flex' : 'none'};
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background: whitesmoke;
        padding: 15px;
        width: max-content;
        transform:  translate(-27.5px, 5px);
        border: 1px solid ${colors.accent};
        border-radius: 5px;
        box-shadow: 2.5px 3px #00000055;

        &::before {
            content: '';
            background: whitesmoke;
            width: 15px;
            height: 15px;
            position: absolute;
            top: -9px;
            transform: rotate(45deg);
            z-index: -500;
            border-left: 1px solid ${colors.accent};
            border-top: 1px solid ${colors.accent};
            border-radius: 2px 0 50% 0;
        }
    `
