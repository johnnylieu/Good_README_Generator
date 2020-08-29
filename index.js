const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'quest',
            message: 'What is your quest?'
        },
        {
            type: 'input',
            name: 'velocity',
            message: 'What is average air-speed velocity of an un-laden swallow?'
        }
    ])
    .then(function (answers) {
        console.log(answers);
        fs.writeFile('python.json', JSON.stringify(answers, null, 4), function() {
            console.log('File has been written');
        });
    });