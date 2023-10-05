const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
         <text x="50%" y="78%" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`
    }
}

module.exports = Triangle;