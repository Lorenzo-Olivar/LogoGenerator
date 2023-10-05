const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: `Enter Maximum of 3 letters for your logo
        ->`,
    },
    {
        type: 'input',
        name: 'textColor',
        message: `Provide the hexcode or name for the color of your logo text
        ->`,
    },
    {
        type: 'input',
        name: 'textColor',
        message: `Provide the hexcode or name for the color of your logo text
        ->`,
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'triangle', 'square',],
        message: `Choose your logo shape
        ->`,
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: `Provide the hexcode or name for the color of your shape
        ->`,
    },
];

module.exports = questions;