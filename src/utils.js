import { DateTime } from 'luxon'


export const toTime = (timestamp, offset) => {
  const time = DateTime.fromMillis(timestamp * 1000).toLocal()
  return (offset === undefined || offset === null) ? time : time.toUTC(-offset)
}