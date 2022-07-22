// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What command should you run to install dependencies?',
        name: 'install',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should you run to perform tests?',
        name: 'test',
        default: 'npm test'
    },
    {
        type: 'list',
        message: 'What license do you have?',
        name: 'licenses',
        choices: ['CC','afl-3.0','MIT','mpl-2.0']
    },
    {
        type: 'input',
        message: 'What does the user need to know about using this project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to this project?',
        name: 'contribute'
    }
];

function createStructure(res) {
    const codeBlock = '```';
    return `
    # ${res.title}
    ## Description
    ${res.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    To install dependencies, run this command:
    ${codeBlock}
    ${res.install}
    ${codeBlock}
    ## Usage
    ${res.usage}
    ## License
    This project is licensed with ${res.licenses}.
    ## Contributing
    ${res.contribute}
    ## Tests
    This command can be run to perform tests:
    ${codeBlock}
    ${res.test}
    ${codeBlock}
    ## Questions
    If you have any questions you can contact my through [email](${res.email}).`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => [
        err ? console.error(err) : console.log(`Created ${fileName}`)
    ]);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', createStructure(answers));
    });
}

// Function call to initialize app
init();
