import React from 'react'

import { momentDate } from '../../../utils'

export default props => {

    const blnk = props.blnk + 1

    return (
        <div
            className="day blank"
            style={{ gridArea: `day${blnk + props.monthDays}` }}
            onClick={() => props.setSelected(momentDate(`${props.month}-${blnk}`))}
        >{blnk}</div>
    )

}