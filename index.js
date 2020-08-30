const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const thenableWriteFile = util.promisify(fs.writeFile);

// global function to call later
function getReadMeOutput(answers) {
    const title = answers.title;
    const description = answers.description;
    const installation = answers.installation;
    const usage = answers.usage;
    const contribution = answers.contribution;
    const testInstructions = answers.testInstructions;
    const listOfLicense = answers.listOfLicense;
    const githubUserName = answers.githubUserName;
    const email = answers.email;
    const name = answers.name;

    var listBadge;

    if (listOfLicense === 'Apache License 2.0') {
        listBadge = 'https://img.shields.io/badge/Apache%20License%202.0-license-black'
    } else if (listOfLicense === 'GNU General Public License v3.0'){
        listBadge = 'https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-license-black'
    } else if (listOfLicense === 'BSD 3-Clause "New" or "Revised" License') {
        listBadge = 'https://img.shields.io/license/BSD%203--Clause%60-badge-black'
    } else if (listOfLicense === 'MIT License') {
        listBadge = 'https://img.shields.io/license/MIT-badge-black'
    };

    return `# ${title}
    
# Description
${description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## 🚀 Usage
${usage}

## 📝 License
${listOfLicense}
![GitHub badge](${listBadge})

## 🤝 Contributing
👤 ${name}
${contribution}
GitHub.com/${githubUserName}

## Tests Instructions
${testInstructions}

## Questions
If you have any questions, please send an email to ${email}.
`
};

// questions to ask
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution guidelines?'
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'What are the test instructions?'
        },
        {
            type: 'list',
            name: 'listOfLicense',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 3-Clause "New" or "Revised" License'],
            message: 'Which license would you like to choose?'
        },
        {
            type: 'input',
            name: 'githubUserName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
    .then(function (answers) {
        return getReadMeOutput(answers);
    })
    .then(function (readMeOutput) {
        return thenableWriteFile('./README.md', readMeOutput);
    })
    .then(function () {
        console.log('All done!');
    })
    .catch(function (error) {
        console.log('Oh noes! An error!', error);
    });