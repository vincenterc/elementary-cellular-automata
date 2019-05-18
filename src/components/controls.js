import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RefreshButton from './refresh-button'
import PlayStopButton from './play-stop-button'
import RuleInput from './rule-input'

class Controls extends React.Component {
  render() {
    let { extraCss, refreshElementaryCASketch, elementaryCARule } = this.props

    return (
      <Wrapper extraCss={extraCss}>
        <RefreshButton
          extraCss={`margin-right: 5px;`}
          onClick={refreshElementaryCASketch}
        />
        <PlayStopButton
          extraCss={`margin-right: 5px;`}
          playing={true}
          onClick={() => {}}
        />
        <RuleInput value={elementaryCARule} />
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
    elementaryCARule: state.elementaryCA.rule,
  }),
  null
)(Controls)
