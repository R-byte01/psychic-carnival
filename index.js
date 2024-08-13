import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from 'generateMarkdown.js';

const questions = [
    {
        type: 'input',
        message: 'Please provide a project title.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation information.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution information.',
        name: 'contribution',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information.',
        choices: ['APache2.0', 'MIT', 'Unlicense', 'none']
    },
    {
        type: 'input',
        message: 'Please provide test information.',
        name: 'testInfo',
    },
    {
        type: 'input',
        message: 'Please provide a GitHub username.',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Please provide an email.',
        name: 'email',
    },
];
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README created successfully');
    });
}
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile('./dist/README.md', markdown);
        });
};
init();
