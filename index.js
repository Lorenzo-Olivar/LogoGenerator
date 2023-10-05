const inquirer = require('inquirer');
const questions = require('./lib/questions');
const writeToFile = require('./writeFile')

inquirer
    .prompt(questions)
    .then(((answers) => {
        console.log(answers);
        writeToFile(answers);
    }));