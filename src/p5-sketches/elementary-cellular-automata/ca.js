class CA {
  constructor(p) {
    this.w = 5
    this.resetProps(p)
  }

  resetProps(p) {
    this.cells = Array(Math.floor(p.width / this.w)).fill(0)
    this.cells[Math.floor(this.cells.length / 2)] = 1
    this.generation = 0
    this.rule = Math.floor(p.random(0, 255))
    this.ruleSet = this.ruleToRuleSet(this.rule)
  }

  generate() {
    this.cells = this.cells.map((c, i) => {
      if (i > 0 && i < this.cells.length - 1) {
        let left = this.cells[i - 1]
        let me = c
        let right = this.cells[i + 1]

        return this.rules(left, me, right)
      }
      return c
    })

    this.generation++
  }

  display(p) {
    this.cells.forEach((c, i) => {
      p.noStroke()
      if (c === 1) p.fill(50)
      else p.fill(255)
      p.rect(i * this.w, this.generation * this.w, this.w, this.w)
    })
  }

  rules(a, b, c) {
    if (a === 1 && b === 1 && c === 1) return this.ruleSet[0]
    if (a === 1 && b === 1 && c === 0) return this.ruleSet[1]
    if (a === 1 && b === 0 && c === 1) return this.ruleSet[2]
    if (a === 1 && b === 0 && c === 0) return this.ruleSet[3]
    if (a === 0 && b === 1 && c === 1) return this.ruleSet[4]
    if (a === 0 && b === 1 && c === 0) return this.ruleSet[5]
    if (a === 0 && b === 0 && c === 1) return this.ruleSet[6]
    if (a === 0 && b === 0 && c === 0) return this.ruleSet[7]
    return 0

    // let s = `${a}${b}${c}`
    // let index = 7 - parseInt(s, 2)
    // return this.ruleSet[index]
  }

  ruleToRuleSet(rule) {
    let ruleSet = rule
      .toString(2)
      .split('')
      .map(v => parseInt(v))
    let complement = Array(8 - ruleSet.length).fill(0)
    return [...complement, ...ruleSet]
  }
}

export default CA
