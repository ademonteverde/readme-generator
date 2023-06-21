const inquirer = require('inquirer');
const fs = require('fs');
const generatorReadme = require('./generateReadme');

// function that returns the license badge
function getLicense(value) {
    if (value === 'Berkeley Software Distribution License (BSD)') {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }  if (value === 'MIT license (Massachusetts Institute of Technology)') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }  if (value === 'GNU General Public License (GNU GPL)') {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }  if (value === 'Apache License 2.0') {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } if (value === 'Internet Systems Consortium (ISC) License') {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
}

// inquirer questions
const questions = ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project\'s description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your project\'s installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your project\'s usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your project\'s contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are your project\'s test instructions?',
        name: 'instructions',
    },
    {
        type: 'list',
        message: 'What license is your project covered under?',
        name: 'license',
        choices: [
            'Berkeley Software Distribution License (BSD)',
            'MIT license (Massachusetts Institute of Technology)',
            'GNU General Public License (GNU GPL)',
            'Apache License 2.0',
            'Internet Systems Consortium (ISC) License'
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'email',
        message: 'What is your email?',
        name: 'email',
    }
])

// function that generates the readme and with the data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        }
    })
}

// function that initializes the inquirer
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            data.getLicense = getLicense(data.license);
            writeToFile('./generated_README/README.md', generatorReadme(data));
        })
}

// calls the initialize function
init();