import React from 'react'
import moment from 'moment'

import { addMonth, subMonth } from '../../utils'
import DatePicker from '../DatePicker'
import FrontBlank from './FrontBlanks'
import MonthDay from './MonthDays'
import BackBlank from './BackBlanks'
import monthVars from './vars'
import { MonthContainer, Top, Title, Next, DayName } from './styles'

export default function Month(props) {

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate, props.selected)

  console.log(props.selected)

  return (

    <MonthContainer>

      <Top>
        <Title>
          <Next onClick={() => props.setSelected(subMonth(props.selected, 1, 'month', true))}
          >{'<'}</Next>
          <h3>{moment(props.selected).format('MMMM YYYY')}</h3>
          <Next onClick={() => props.setSelected(addMonth(props.selected, 1, 'month', true))}
          >{'>'}</Next>
        </Title>
        <DatePicker id='dp' currentDate={props.currentDate} setCurrentDate={props.setSelected} />
      </Top>

      {weekdays
        .map(day =>
          <DayName
            day={day}
            key={day}>{day}
          </DayName>
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

    </MonthContainer>

  )

}
