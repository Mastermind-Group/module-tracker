import { createGlobalStyle } from 'styled-components'
import { Button, Flex } from './Scomps'
import { buttonSize, colors } from './variables'

export default createGlobalStyle`
    
    html {
        font-size: 67.5%;
    }

    body {
        color: ${colors.primary};
        background: #7db186;
    }

`

export {
    Button,
    Flex,
    colors,
    buttonSize
}
