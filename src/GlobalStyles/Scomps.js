import styled from 'styled-components'
import { buttonSize, colors } from './variables'

export const Flex = styled.div`
        display: flex;
        background: ${
    props =>
        props.primary ? colors.pbg :
            props.secondary ? colors.sbg :
                'inherit'
    };
        justify-content: ${
    props =>
        props.spaceAJ ? 'space-around' :
            props.spaceBJ ? 'space-between' :
                props.spaceEJ ? 'space-evenly' :
                    props.startJ ? 'flex-start' :
                        props.endJ ? 'flex-end' :
                            'center'
    };
        align-items: ${
    props =>
        props.spaceAA ? 'space-around' :
            props.spaceBA ? 'space-between' :
                props.spaceEA ? 'space-evenly' :
                    props.startA ? 'flex-start' :
                        props.endA ? 'flex-end' :
                            'center'
    };
        flex-direction: ${props => props.column ? 'column' : 'row'};
        ${props => props.wrap && 'flex-wrap: wrap;'}
        width: ${props => props.control ? props.control : '100%'};
        margin: 0 auto;
        ${props => props.global && 'height: 100vh'};
`,

    Button = styled.button`
        background: ${
        props =>
            props.active ? 'grey' :
                props.primary ? colors.primary :
                    colors.secondary
        };
        padding: ${
        props =>
            props.active ? buttonSize.active.small :
                props.small ? buttonSize.small :
                    buttonSize.medium
        };
        border-radius: ${
        props =>
            props.first ? '5px 0 0 5px' :
                props.last ? '0 5px 5px 0' :
                    props.middle ? '0' :
                        '5px'
        };
        width: ${
        props =>
            props.half ? '50%' :
                props.third ? '30%' :
                    'max-width'
        };
        outline: none;

        &:hover {
            transform: ${props => props.active ? 'none' : 'scale(1.03)'};
            cursor: ${props => props.active ? 'default' : 'pointer'};
            transition: .4s;
        }
`,
    Grid = styled.div`

    `
