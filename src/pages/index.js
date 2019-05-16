import React from 'react'
import PageWrapper from '../components/page-wrapper'
import P5Wrapper from '../components/p5-wrapper'
import elementaryCASketch from '../sketches/elementary-cellular-automata'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={elementaryCASketch} />
      </div>
    )
  }
}

export default PageWrapper(HomePage)
