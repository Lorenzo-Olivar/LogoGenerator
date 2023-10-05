const Shape = require('./shapes');

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    }
    render(){
        return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />
   <text x="50%" y="59%" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
</svg>`
    }
}

module.exports = Square;