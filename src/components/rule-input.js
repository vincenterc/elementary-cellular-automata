import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

class RuleInput extends React.Component {
  render() {
    let { rule } = this.props

    return (
      <Wrapper>
        <label>Rule</label>
        <input disabled value={rule} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  background: #ccc;
  display: flex;
  align-items: center;

  & > label {
    margin-right: 5px;
  }

  & > input {
    width: 30px;
    text-align: right;
  }
`

export default connect(
  state => ({
    rule: state.elementaryCA.rule,
  }),
  null
)(RuleInput)
