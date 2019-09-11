import React, { useState } from 'react'
import moment from 'moment'

import Event from './Event'
import './modal.scss'

const Modal = props => {

    const [name, setName] = useState('')

    const match = props.events.filter(e => moment(e.date).format('YYYY-MM-DD') === props.selected)

    return (

        <div
            className='Modal'
            style={{ display: props.show ? 'flex' : 'none' }}
            onClick={props.showModal}
        >
            <section
                className="modal-main"
                onClick={(e) => e.stopPropagation()}
            >
                <h1>{moment(props.selected).format('MMMM Do YYYY')}</h1>
                {match.length ? match.map((e, id) => <Event key={id} {...e} />) : ''}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.addEvent({ name, date: props.selected })
                    setName('')
                }}>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <button>Add Event</button>
                </form>
            </section>
        </div>

    )

}

export default Modal
