import { DateTime } from 'luxon'


export const toTime = timestamp =>
  DateTime.fromMillis(timestamp * 1000, {
    zone: -new Date().getTimezoneOffset()
  })