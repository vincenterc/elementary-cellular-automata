import React from 'react'
import styled from 'styled-components'
import RefreshButton from './refresh-button'
import RuleInput from './rule-input'

class Controls extends React.Component {
  render() {
    let { extraCss } = this.props

    return (
      <Wrapper extraCss={extraCss}>
        <RefreshButton extraCss={`margin-right: 5px;`} />
        <RuleInput />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.extraCss}
`

export default Controls
