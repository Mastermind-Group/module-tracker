import styled from 'styled-components'

const colors = {

    // general colors
    primary: '#0c1323',
    secondary: '#f8f8f8',

    // backgrounds
    pbg: '#f8f8f8',
    sbg: '#0c1323',

}

const buttonSize = {

    active: {
        small: '1rem 1.2rem',
        medium: '1.1rem 2.4rem',
        large: '1.8rem 2.4rem'
    },
    tiny: '0 2.5rem',
    small: '1.1rem 1.2rem',
    medium: '1.2rem 2.4rem',
    large: '2rem 2.4rem'

}

const Flex = styled.div`
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
        width: 100%;
        ${props => props.container && 'height: 100vh'};
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
`

export {
    Button,
    Flex,
    colors,
    buttonSize
}
