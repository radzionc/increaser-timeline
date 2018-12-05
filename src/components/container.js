import styled from 'styled-components'

export default styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  border-radius: 5px;
  margin: 0 10px;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`
