class SVG {
  constructor() {
    this.shape = ''
    this.text = ''
  }
render() {
  return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape} ${this.color}</svg>`
}
setText(chosenText, chosenColor) {
  this.text = `<text x="40" y="40" fill= '${chosenColor}'>${chosenText}</text>`
}
setShape(chosenShape) {
  this.shape = chosenShape.render()
}
}
module.exports = SVG