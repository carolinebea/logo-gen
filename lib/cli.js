const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./shapes')
const SVG = require ('./svg')
const questions = [
  {
    type: 'input',
    message: 'What 3 letters are in your logo?',
    name: 'letters'
  },
  {
    type: 'input',
    message: 'Text color?',
    name: 'txtcolor'
  },
  {
    type: 'list',
    message: 'What shape is your logo?',
    name: 'shape',
    choices: ['Square', 'Triangle', 'Circle']
  },
  {
    type: 'input',
    message: 'What color is your logo?',
    name: 'color'
  },

   

  ];

class CLI {

  init() {
    return inquirer.prompt (questions).then(data => {
      console.log(data)
     var shape 
     if (data.shape === 'Square') {
      shape = new Square()
     }
     else if (data.shape === 'Circle') {
      shape = new Circle()
     }
     else if (data.shape === 'Triangle') {
      shape = new Triangle()
     }
     shape.setColor(data.color)
     var setSVG = new SVG() 
     setSVG.setShape(shape)
     setSVG.setText(data.letters, data.txtcolor)
     return fs.writeFileSync('newlogo.svg', setSVG.render())
    })
    }
}
module.exports = CLI