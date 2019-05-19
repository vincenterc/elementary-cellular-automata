import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actionCreators from '../action-creators'
import RefreshButton from './refresh-button'
import PlayPauseButton from './play-pause-button'
import RuleInput from './rule-input'

class Controls extends React.Component {
  render() {
    let {
      extraCss,
      refreshElementaryCASketch,
      elementaryCAPlaying,
      elementaryCARule,
    } = this.props

    return (
      <Wrapper extraCss={extraCss}>
        <RefreshButton
          extraCss={`margin-right: 5px;`}
          onClick={refreshElementaryCASketch}
        />
        <PlayPauseButton
          extraCss={`margin-right: 5px;`}
          playing={elementaryCAPlaying}
          onClick={this.onClickPlayPauseButton}
        />
        <RuleInput value={elementaryCARule} />
      </Wrapper>
    )
  }

  onClickPlayPauseButton = e => {
    let {
      elementaryCAPlaying,
      playElementaryCA,
      pauseElementaryCA,
      setElementaryCAState,
    } = this.props

    if (elementaryCAPlaying) {
      pauseElementaryCA()
    } else {
      playElementaryCA()
    }
    setElementaryCAState({ playing: !elementaryCAPlaying })
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
