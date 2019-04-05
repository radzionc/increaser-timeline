import React from 'react'
import styled from 'styled-components'

import Timeline from 'increaser-timeline'

const TestingPage = styled.div`
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  position: relative;
  height: 60%;
  width: 80%;
  padding: 20px;
  background-color: #001f3f;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  transition: background-color 800ms linear;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Increaser = styled.a`
  top: 20px;
  left: 20px;
  position: absolute;
  font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 34px;
  cursor: pointer;
  text-decoration: none;
`

const TimeWaitsForNoOne = styled.a`
  margin: 40px;
  color: black;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
`

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 500px;
`

const START_HOUR = 9
const END_HOUR = START_HOUR + 12

const COLORS = [
  '#7FDBFF',
  '#3D9970',
  '#01FF70',
  '#FF851B',
  '#85144b',
  '#FF851B',
  '#B10DC9',
  '#AAAAAA'
]

const getRandomDuration = () => Math.round(Math.random() * 60) * 60
const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)]

const getStartSet = () => {
  const nowDate = new Date()
  const nowHours = nowDate.getHours()
  const nowMinutes = nowDate.getMinutes()
  const nowSeconds = nowDate.getSeconds()
  const secondsFromStart = (nowSeconds + (nowMinutes * 60) + (nowHours * 60**2)) - (START_HOUR * 60**2)

  const setStart = Date.now() / 1000 - secondsFromStart
  return {
    start: setStart,
    end: setStart + getRandomDuration(),
    color: getRandomColor()
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sets: [ getStartSet() ]
    }
    setInterval(() => {
      const { sets } = this.state
      const lastSet = sets[sets.length - 1]
      const start = lastSet.end + getRandomDuration()
      const end = start + getRandomDuration()
      const endTime = new Date(end * 1000)
      if (endTime.getHours() > END_HOUR) {
        this.setState({ sets: [ getStartSet() ]})
      } else {
        const set = {
          start,
          end,
          color: getRandomColor()
        }
        this.setState({ sets: [ ...sets, set ] })
      }
    }, 1000)
  }

  render() {
    const { sets } = this.state
    return (
      <TestingPage>
        <Container>
          <Timeline
            wrapper={ContainerWrapper}
            sets={sets}
          />
          <Increaser target="_blank" href="https://increaser.org">
            Increaser
          </Increaser>
        </Container>
        <TimeWaitsForNoOne
          target="_blank"
          href="https://medium.com/@geekrodion/increaser-mindset-dc828a2bcd4d"
        >
          Time Waits For No One, and It Won't Wait For Me
        </TimeWaitsForNoOne>
      </TestingPage>
    )
  }
}
