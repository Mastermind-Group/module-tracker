import React from 'react'

import { momentDate } from '../../../utils'

export default props => {

    const blank = props.prevMonth - props.frontBlanks.length + props.blank + 1

    return (
        <div
            className='day blank'
            style={{ gridArea: `day${props.blank + 1}` }}
            onClick={() => props.setSelected(momentDate(`${props.month}-${blank}`))}
        >{blank}</div>
    )

}