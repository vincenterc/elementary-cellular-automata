import React from 'react'

class P5Wrapper extends React.Component {
  componentDidMount() {
    // hack to import p5 because SSR
    this.p5 = require('p5')

    let { sketch, exposeSketchCustomProps } = this.props
    this.p5Instance = new this.p5(sketch, this.wrapper)
    if (this.p5Instance.setSketchProps) {
      this.p5Instance.setSketchProps(this.props)
    }
    exposeSketchCustomProps(this.p5Instance.customProps)
  }

  componentWillReceiveProps(newProps) {
    if (this.p5Instance.setSketchProps) {
      this.p5Instance.setSketchProps(newProps)
    }
  }

  render() {
    return <div ref={wrapper => (this.wrapper = wrapper)} />
  }
}

export default P5Wrapper
