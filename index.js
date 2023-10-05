const inquirer = require('inquirer');
const questions = require('./lib/questions');
const writeToFile = require('./lib/writeFile')

inquirer
    .prompt(questions)
    .then(((answers) => {
        console.log(answers);
        writeToFile(answers);
    }));