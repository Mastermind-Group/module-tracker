import React from 'react'

import { momentDate } from '../../../utils'
import { Blank } from '../styles'

export default props => {

    const blnk = props.blnk + 1

    return (
        <Blank
            blank={`day${blnk + props.monthDays}`}
            onClick={() => props.setSelected(momentDate(`${props.month}-${blnk}`))}
        >{blnk}</Blank>
    )

}