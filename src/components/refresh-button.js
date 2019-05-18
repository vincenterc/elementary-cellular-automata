import React from 'react'
import styled from 'styled-components'
import { Refresh } from './icons'

class RefreshButton extends React.Component {
  render() {
    let { extraCss, onClick } = this.props

    return (
      <Wrapper extraCss={extraCss} onClick={onClick}>
        <Refresh size={20} />
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

export default RefreshButton
