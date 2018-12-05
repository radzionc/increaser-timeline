import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, DEFAULT_MIN_HOURS, HOURS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../constants'
import { toTime } from '../utils'

import Container from './container'
import Period from './period'
import Time from './time'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    const { wrapper: Wrapper, theme, sets, minHours = DEFAULT_MIN_HOURS } = this.props
    const Content = () => {
      const setsAsTime = sets.map(({ start, end, color }) => ({
        start: toTime(start),
        end: toTime(end),
        color
      }))
      const { start } = setsAsTime[0]
      const lastSetHour = setsAsTime[setsAsTime.length - 1].start.hour
      const biggestEndHour = lastSetHour + minHours
      const endHour = biggestEndHour < HOURS_IN_DAY ? biggestEndHour : HOURS_IN_DAY
      const startSeconds = start.hour * SECONDS_IN_HOUR + start.minute * SECONDS_IN_MINUTE + start.second
      const secondsInInterval = endHour * SECONDS_IN_HOUR - startSeconds
      return (
        <React.Fragment>
          <Container>
            {setsAsTime.map((set, key) => (
              <Period {...{ ...set, key, beginning: start, secondsInInterval }} />)
            )}
          </Container>
          <Time
            start={start}
            endHour={endHour}
          />
        </React.Fragment>
      )
    }

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Wrapper ref={el => (this.wrapper = el)}>
          {sets && sets.length > 0 && <Content />}
        </Wrapper>
      </ThemeProvider>
    )
  }

  componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    const { width, height } = this.wrapper.getBoundingClientRect()
    this.setState({ width, height })
  }
}
