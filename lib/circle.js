const Shape = require('./shapes');

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="50%" y="59%" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`
    }
}

module.exports = Circle;