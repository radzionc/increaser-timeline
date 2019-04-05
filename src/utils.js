import { DateTime } from 'luxon'


export const toTime = timestamp => DateTime.fromMillis(timestamp * 1000).toLocal()