import React from 'react'
import './Weekdays.scss'

export default props => {

    return (

        <div
            className='day-name'
            style={{
                gridArea: `${props.day}`,
                color: 'black',
                background: props.background || props.backgroundColor
            }}
        >{props.day}</div>

    )

}
