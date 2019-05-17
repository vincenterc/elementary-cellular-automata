import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actionCreators from '../action-creators'
import PageWrapper from '../components/page-wrapper'
import Controls from '../components/controls'
import P5Wrapper from '../components/p5-wrapper'
import elementaryCASketch from '../p5-sketches/elementary-cellular-automata'

class HomePage extends React.Component {
  componentDidMount() {
    let { setElementaryCARule } = this.props
    setElementaryCARule(this.elementaryCAP5Wrapper.p5Instance.ca.rule)
  }

  render() {
    let { setElementaryCARule } = this.props

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
          setCARuleToRedux={setElementaryCARule}
          ref={elementaryCAP5Wrapper =>
            (this.elementaryCAP5Wrapper = elementaryCAP5Wrapper)
          }
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
`

export default PageWrapper(
  connect(
    null,
    actionCreators
  )(HomePage)
)
