import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actionCreators from '../action-creators'
import * as Icons from './icons'
import RoundButton from './round-button'
import RuleInput from './rule-input'

class Controls extends React.Component {
  render() {
    let { extraCss, elementaryCAPlaying, elementaryCARule } = this.props

    return (
      <Wrapper extraCss={extraCss}>
        <RoundButton
          extraCss={`margin-right: 5px;`}
          onClick={this.onClickRefreshButton}
        >
          <Icons.Refresh size={20} />
        </RoundButton>

        <RoundButton
          extraCss={`margin-right: 5px;`}
          onClick={this.onClickPlayPauseButton}
        >
          {elementaryCAPlaying ? (
            <Icons.Pause size={20} />
          ) : (
            <Icons.Play size={20} />
          )}
        </RoundButton>

        <RuleInput
          min="0"
          max="255"
          disabled={elementaryCAPlaying}
          value={elementaryCARule}
          onChange={this.onChangeRuleInput}
          onKeyPress={this.onKeyPressRuleInput}
        />
      </Wrapper>
    )
  }

  onClickRefreshButton = () => {
    let { refreshElementaryCASketch } = this.props

    refreshElementaryCASketch()
  }

  onClickPlayPauseButton = e => {
    let {
      elementaryCAPlaying,
      playElementaryCA,
      pauseElementaryCA,
    } = this.props

    if (elementaryCAPlaying) {
      pauseElementaryCA()
    } else {
      playElementaryCA()
    }
  }

  onChangeRuleInput = e => {
    let { setElementaryCAState } = this.props

    setElementaryCAState({ rule: e.target.value })
  }

  onKeyPressRuleInput = e => {
    let { playElementaryCA } = this.props

    if (e.key === 'Enter') {
      playElementaryCA()
    }
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
    elementaryCAPlaying: state.elementaryCA.playing,
    playElementaryCA: state.elementaryCA.play,
    pauseElementaryCA: state.elementaryCA.pause,
    elementaryCARule: state.elementaryCA.rule,
  }),
  actionCreators
)(Controls)
