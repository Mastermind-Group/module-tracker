import React from 'react'
import moment from 'moment'

import { addMonth, subMonth } from '../../utils'
import DatePicker from '../DatePicker'
import Weekday from './Weekdays'
import FrontBlank from './FrontBlanks'
import MonthDay from './MonthDays'
import BackBlank from './BackBlanks'
import monthVars from './vars'
import './Month.scss'

export default function Month(props) {

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate, props.selected)

  console.log(props.selected)

  return (

    <div className="Month">

      <div className="top" style={{ gridArea: 'title' }}>
        <div className="title">
          <span
            className='next'
            onClick={() => props.setSelected(subMonth(props.selected, 1, 'month', true))}
          >{'<'}</span>
          <h3>{moment(props.selected).format('MMMM YYYY')}</h3>
          <span
            className='next'
            onClick={() => props.setSelected(addMonth(props.selected, 1, 'month', true))}
          >{'>'}</span>
        </div>
        <DatePicker id='dp' currentDate={props.currentDate} setCurrentDate={props.setSelected} />
      </div>

      {weekdays
        .map(day =>
          <Weekday
            day={day}
            key={day}
          />
        )}

      {frontBlanks
        .map(blank =>
          <FrontBlank
            blank={blank}
            prevMonth={prevMonth}
            frontBlanks={frontBlanks}
            key={blank * Math.random()}
            setSelected={props.setSelected}
            month={subMonth(props.selected, 1, 'month')}
          />
        )}

      {monthDays
        .map(day =>
          <MonthDay
            day={day}
            frontBlanks={frontBlanks}
            currentDay={currentDay}
            key={day}
            selected={props.selected}
            setSelected={props.setSelected}
            currentDate={props.currentDate}
            events={props.events}
            addEvent={props.addEvent}
          />
        )}

      {backBlanks
        .map(blnk =>
          <BackBlank
            blnk={blnk}
            monthDays={monthDays}
            key={blnk * Math.random()}
            setSelected={props.setSelected}
            month={addMonth(props.selected, 1, 'month')}
          />
        )}

    </div>

  )

}
