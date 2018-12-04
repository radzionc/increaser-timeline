import React from 'react'
import styled from 'styled-components'

const Period = styled.div`
  position: absolute;
  height: 100%;
  bottom: 0;
`

export default ({ beginning, secondsInInterval, start, end, color }) => {
  const diff = (one, other) => `${one.diff(other).as('seconds') * 100 / secondsInInterval}%`
  const style = {
    marginLeft: diff(start, beginning),
    width: diff(end, start),
    backgroundColor: color
  }
  return (
    <Period style={style} />
  )
}
