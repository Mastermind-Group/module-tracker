import React, { useState } from 'react'
import moment from 'moment'

import Month from './components/Month'

const events = [
    {
        name: 'Something',
        date: moment('2019-08-23').format('YYYY-MM-DD')
    }
]

export default props => {

    const currentDate = moment().format('YYYY-MM-DD')

    const [selected, setSelected] = useState(currentDate)

    function addEvent(event) {
        events.push(event)
    }

    return <Month
        currentDate={currentDate}
        selected={selected}
        setSelected={setSelected}
        style={{ height: '20%' }}
        events={props.events || events}
        addEvent={addEvent}
    />

}
