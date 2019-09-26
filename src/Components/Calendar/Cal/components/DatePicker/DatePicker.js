import React, { useState, Fragment } from 'react'
import { useForm } from 'customhooks'

import { momentDate } from '../../utils'
import { Form, Button } from './styles'

export default function DatePicker(props) {

    const [selectDate, setSelectDate] = useState(false)

    const { fields, handleChanges, submit } = useForm(setDate)

    function setDate() {
        props.setCurrentDate(fields.date)
        setSelectDate(!selectDate)
    }

    return (
        <Fragment>

            <Form onSubmit={submit} selectDate={selectDate}>
                <input
                    type={props.week ? 'datetime-local' : 'date'}
                    name='date'
                    onChange={handleChanges}
                    defaultValue={momentDate(props.currentDate)}
                    id='dp'
                />
                <button>Submit</button>
            </Form>

            <Button
                onClick={() => setSelectDate(!selectDate)}
                selectDate={selectDate}
            >Change Date</Button>

        </Fragment>
    )
}
