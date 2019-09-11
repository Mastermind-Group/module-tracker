import moment from 'moment'

export default (curr, sel) => {

    const weekdays = moment.weekdaysShort()

    const prevMonth = moment(sel).subtract(1, 'month').daysInMonth()// Number of days in previous month

    const firstDoM = moment(sel).startOf('month').format('d')// Day of week of first day of current month

    const frontBlanks = []// Number of days before first day of month
    for (let i = 0; i < firstDoM; i++) frontBlanks.push(i)

    const daysInMonth = moment(sel).daysInMonth()// Number of days in current month

    const backBlanks = []// Number of days after last day of month
    for (let i = 0; i < (42 - daysInMonth - frontBlanks.length); i++) backBlanks.push(i)

    const monthDays = []// Days in current month
    for (let i = 1; i <= daysInMonth; i++) monthDays.push(i)

    const currentDay = moment(curr).format('YYYY-M-D')

    return { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay }

}
