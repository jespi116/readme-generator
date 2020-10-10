const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const generatePage = require('./src/page-template.js');
const generateMd = require('./utils/generate-md.js');


const promptUser = readmeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub Username?',
            validate: name => {
                if (name){
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email){
                    return true;
                } else {
                    console.log('Plesae enter your email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pName',
            message: "What is your project's name?",
            validate: name => {
                if (name){
                    return true;
                } else {
                    console.log("Please enter your project's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please wrtie a brief description of your project.',
            validate: desc => {
                if (desc){
                    return true;
                } else {
                    console.log('Please write a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [ 'MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None' ]
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo??'
        }
    ])
}

promptUser()
    .then(readmeData => {
        return generatePage(readmeData);
    })
    .then(pageMd => {
        return generateMd(pageMd);
    })