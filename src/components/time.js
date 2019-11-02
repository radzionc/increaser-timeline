import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  color: ${props => props.theme.textColor};
`
const format = (hour, minute) => {
  return `${(hour % 12) || 12}${minute ? `:${minute.toString().padStart(2, '0')}` : ''} ${hour >= 12 ? 'PM' : 'AM'}`
}

export default ({ start, endHour }) => {
  return (
    <Line>
      <p>{format(start.hour, start.minute)}</p>
      <p>{format(endHour)}</p>
    </Line>
  )
}