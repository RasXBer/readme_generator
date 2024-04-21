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
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'code',
        message: 'Code used in your project:',
    },

];

// console.log(questions);

// Prompt user for input
// inquirer.prompt(questions)
//     .then((answers) => {
//         const READMEContent = generateREADME(answers);

//         // Write README to file
//         fs.writeFile('README.md', READMEContent, (err) => {
//             if (err) throw err;
//             console.log('README.md file successfully generated!');
//         });
//     })
//     .catch((error) => {
//         console.error('Error occurred:', error);
//     });

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//             console.error('Error writing to file:', err);
//         } else {
//             console.log(`${fileName} file successfully generated!`);
//         }
//     });
// }

// module.exports = writeToFile;


// TODO: Create a function to initialize app
// function init() {
//     inquirer.createPromptModule(questions)
//     .then((answers) => {
//         console.log("creating readme file");
//         writeToFile("./utils/README.md", generateREADME(answers));
//     });
//     // catch((error) => {
//     //     console.error('Error occurred:', error);
//     // });
//     }

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
// module.exports = init;

// Function call to initialize app
init();
