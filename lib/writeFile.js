const fs = require('fs');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');


const writeToFile = (answers) => {
    let svgLogo;
    switch (answers.shape) {
        case 'circle':
            svgLogo = new Circle(answers.logoText, answers.textColor, answers.shapeColor);
            break;
        case 'triangle':
            svgLogo = new Triangle(answers.logoText, answers.textColor, answers.shapeColor);
            break;
        case 'square':
            svgLogo = new Square(answers.logoText, answers.textColor, answers.shapeColor);
            break;
        default:
            console.log(err)
            console.log('Error: Switch Case undefined at `writeFile.js`.')
            break;
    }
    const renderShape = svgLogo.render();
    fs.writeFile('./FinishedLogo/logo.svg', renderShape, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
    );
}
module.exports = writeToFile;