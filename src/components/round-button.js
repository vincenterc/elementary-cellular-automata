import React from 'react'
import styled from 'styled-components'

class RoundButton extends React.Component {
  render() {
    let { extraCss = '', onClick = () => {}, children } = this.props

    return (
      <Wrapper extraCss={extraCss} onClick={onClick}>
        {children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.extraCss}
`

export default RoundButton
