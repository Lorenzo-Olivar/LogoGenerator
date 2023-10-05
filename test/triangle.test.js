const Triangle = require('../lib/triangle');

describe('Rendering SVG Shape', () => { 
    describe('Triangle', () => { 
        it ('the svg logo should be a blue triangle with white text saying `Tst` in the middle', () => {
            const shape = new Triangle();
            shape.logoText = 'TsT';
            shape.textColor = 'white';
            shape.shapeColor = 'blue';
            expect(shape.render()).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="50%" y="78%" font-size="60" text-anchor="middle" fill="white">TsT</text>
</svg>`)
        })
     })
 });



