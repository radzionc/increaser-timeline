import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../constants'

export default class timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    const { wrapper: Wrapper, theme } = this.props

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Wrapper ref={el => (this.wrapper = el)}>
          
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
