import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actionCreators from '../action-creators'
import PageWrapper from '../components/page-wrapper'
import Controls from '../components/controls'
import P5Wrapper from '../components/p5-wrapper'
import elementaryCASketch from '../p5-sketches/elementary-cellular-automaton'

class HomePage extends React.Component {
  render() {
    let { elementaryCARule, setElementaryCAState } = this.props

    return (
      <Wrapper>
        <Controls
          extraCss={`
            position: absolute;
            top: 10px;
            left: 15px;
          `}
        />
        <P5Wrapper
          sketch={elementaryCASketch}
          caRule={elementaryCARule}
          setStateToRedux={setElementaryCAState}
          exposeSketchCustomProps={this.handleExposeSketchCustomProps}
          ref={elementaryCAP5Wrapper =>
            (this.elementaryCAP5Wrapper = elementaryCAP5Wrapper)
          }
        />
      </Wrapper>
    )
  }

  handleExposeSketchCustomProps = props => {
    let { setElementaryCAState } = this.props

    setElementaryCAState(props)
  }
}

const Wrapper = styled.div`
  position: relative;
`

export default PageWrapper(
  connect(
    state => ({
      elementaryCARule: state.elementaryCA.rule,
    }),
    actionCreators
  )(HomePage)
)
