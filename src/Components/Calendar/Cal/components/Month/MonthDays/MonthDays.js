import React, { useState } from 'react'
import moment from 'moment'

import { momentDate } from '../../../utils'
import Modal from '../../Modal'

export default props => {

    const [show, setShow] = useState(false)

    const showModal = () => setShow(!show)

    const yyMm = moment(props.selected).format('YYYY-MM')

    const match = props.events.filter(e => momentDate(e.date) === momentDate(`${yyMm}-${props.day}`))

    return (
        <>

            <Modal
                show={show}
                showModal={showModal}
                selected={props.selected}
                setSelected={props.setSelected}
                events={props.events}
                addEvent={props.addEvent}
            />

            <div
                onClick={() => {
                    props.setSelected(moment(`${yyMm}-${props.day}`).format('YYYY-MM-DD'))
                    showModal()
                }}
                className={`day${props.currentDate === yyMm + '-' + props.day ? ' active' :
                    props.selected === yyMm + '-' + props.day ? ' selected' : ''}`}
                style={{ gridArea: `day${props.frontBlanks.length + props.day}`, border: match.length && '2px ridge red' }}
            >{props.day}
            </div>
        </>
    )

}
