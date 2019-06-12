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

  p.refreshSketch = caRule => {
    p.background(255)
    ca.resetProps(p, caRule)
    caRule = ca.rule
    caRuleBackup = ca.rule
    setStateToRedux({ rule: ca.rule })
  }

  p.play = () => {
    if (caRule !== caRuleBackup) {
      caRuleBackup = caRule
      p.refreshSketch(caRule)
    }

    p.loop()
  }

  p.pause = () => {
    p.noLoop()
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(15)
    p.background(255)

    ca = new CA(p)
    caRule = ca.rule
    caRuleBackup = ca.rule
    p.ca = ca
  }

  p.draw = function() {
    ca.display(p)
    if (ca.generation < Math.floor(p.height / ca.w)) {
      ca.generate()
    } else {
      p.refreshSketch()
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
