import React from 'react'
import styled from 'styled-components'

class RuleInput extends React.Component {
  render() {
    let {
      min,
      max,
      disabled = false,
      value = '',
      onChange = () => {},
    } = this.props

    return (
      <Wrapper>
        <label>Rule</label>
        <input
          type="number"
          min={min}
          max={max}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
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
    width: 45px;
    text-align: right;
  }
`

export default RuleInput
