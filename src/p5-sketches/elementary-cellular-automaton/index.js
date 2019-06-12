import CA from './ca'

export default function sketch(p) {
  let ca
  let caRule
  let caRuleBackup
  let setStateToRedux

  p.setSketchProps = props => {
    if (props.caRule !== undefined) caRule = validateCARule(props.caRule)
    if (props.setStateToRedux) setStateToRedux = props.setStateToRedux
  }

  p.customProps = {}

  p.customProps.refreshSketch = caRule => {
    p.background(255)
    ca.resetProps(p, caRule)
    caRule = ca.rule
    caRuleBackup = ca.rule
    setStateToRedux({ rule: ca.rule })
  }

  p.customProps.play = () => {
    if (caRule !== caRuleBackup) {
      caRuleBackup = caRule
      p.customProps.refreshSketch(caRule)
    }
    setStateToRedux({ playing: true })
    p.loop()
  }

  p.customProps.pause = () => {
    setStateToRedux({ playing: false })
    p.noLoop()
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(15)
    p.background(255)
    p.noLoop()

    ca = new CA(p)
    caRule = ca.rule
    caRuleBackup = ca.rule
    p.customProps.rule = ca.rule
  }

  p.draw = function() {
    ca.display(p)
    if (ca.generation < Math.floor(p.height / ca.w)) {
      ca.generate()
    } else {
      p.customProps.refreshSketch()
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  function validateCARule(rule) {
    rule = parseInt(rule)
    if (isNaN(rule)) return caRuleBackup
    else if (rule > 255) return 255
    else if (rule < 0) return 0
    return rule
  }
}
