import React from 'react'
import styled from 'styled-components'
import RuleInput from './rule-input'

class Controls extends React.Component {
  render() {
    let { extraCss } = this.props

    return (
      <Wrapper extraCss={extraCss}>
        <RuleInput />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  ${props => props.extraCss}
`

export default Controls
