import React from 'react'
import p5 from 'p5'

class P5Wrapper extends React.Component {
  componentDidMount() {
    let { sketch } = this.props
    this.p5 = new p5(sketch, this.wrapper)
  }

  render() {
    return <div ref={wrapper => (this.wrapper = wrapper)} />
  }
}

export default P5Wrapper
