// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Your name?',
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide Installation instruction:',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage:',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Tests:',
    },
    {
        type: 'input',
        name: 'code',
        message: 'Code used in your project:',
    },

];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const READMEContent = generateMarkdown(answers);

        // Write README to file
        writeToFile('README.md', READMEContent);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();
