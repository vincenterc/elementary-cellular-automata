import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RefreshButton from './refresh-button'
import RuleInput from './rule-input'

class Controls extends React.Component {
  render() {
    let { extraCss, refreshElementaryCASketch } = this.props

    return (
      <Wrapper extraCss={extraCss}>
        <RefreshButton
          extraCss={`margin-right: 5px;`}
          onClick={refreshElementaryCASketch}
        />
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

export default connect(
  state => ({
    refreshElementaryCASketch: state.elementaryCA.refreshSketch,
  }),
  null
)(Controls)
