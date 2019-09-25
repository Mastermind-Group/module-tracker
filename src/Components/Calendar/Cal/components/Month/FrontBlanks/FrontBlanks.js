import React from 'react'

import { momentDate } from '../../../utils'
import { Blank } from '../styles'

export default props => {

    const blank = props.prevMonth - props.frontBlanks.length + props.blank + 1

    return (
        <Blank
            blank={`day${props.blank + 1}`}
            onClick={() => props.setSelected(momentDate(`${props.month}-${blank}`))}
        >{blank}</Blank>
    )

}