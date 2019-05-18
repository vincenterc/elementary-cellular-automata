import React from 'react'
import styled from 'styled-components'

class RuleInput extends React.Component {
  render() {
    let { value } = this.props

    return (
      <Wrapper>
        <label>Rule</label>
        <input disabled value={value} />
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

export default RuleInput
