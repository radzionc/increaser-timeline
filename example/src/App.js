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
  background-color: #7FDBFF;
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
  height: 160px;
  width: 400px;
  @media (max-width: 640px) {
    height: 120px;
  }
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <TestingPage>
        <Container>
          <Timeline
            wrapper={ContainerWrapper}
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
