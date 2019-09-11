import moment from 'moment'

export const momentDate = date => moment(date).format('YYYY-MM-DD')

export const subMonth = (date, num, scale, day) => moment(date).subtract(num, scale).format(`YYYY-MM${day ? '-DD' : ''}`)

export const addMonth = (date, num, scale, day) => moment(date).add(num, scale).format(`YYYY-MM${day ? '-DD' : ''}`)
