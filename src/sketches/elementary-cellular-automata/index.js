import CA from './ca'

export default function sketch(p) {
  let ca

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(10)
    p.background(255)

    ca = new CA(p)
  }

  p.draw = function() {
    ca.display(p)
    if (ca.generation < Math.floor(p.height / ca.w)) {
      ca.generate()
    } else {
      p.background(255)
      ca.resetProps(p)
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}
