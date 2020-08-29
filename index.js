const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([{
            type: 'input',
            name: 'tile',
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
            type: 'input',
            name: 'listOfLicense',
            message: ''
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
        console.log(answers);
        fs.writeFile('README.md', JSON.stringify(answers, null, 4), function () {
            console.log('File has been written');
        });
    });

.then(function readmeOutput(answers) {
    const title = answers.title;
    const description = answers.description;
    const installation = answers.installation;
    const usage = answers.usage;
    const contribution = answers.contribution;
    const testInstructions = answers.testInstructions;
    const listOfLicense = answers.listOfLicense;
    const githubUserName = answers.githubUserName;
    const email = answers.email;

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

## Usage
${usage}

## License
${listOfLicense}

## Contributing
${contribution}

## Tests Instructions
${testInstructions}

## Questions
If you have any questions, please send an email to ${email}.
GitHub.com/${githubUserName}
`
}):


// might use some of the below later
// const fs = require('fs');
// const util = require('util');
// const inquirer = require('inquirer');
// const thenableWriteFile = util.promisify(fs.writeFile);

// function getHtmlOutput(answers) {
//     const name = answers.name;
//     const location = answers.location;
//     const bio = answers.bio;
//     const githubUserName = answers.githubUserName;
//     const linkedInUserName = answers.linkedinUserName;
//     return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Portfolio</title>
// </head>
// <body>
//     <div class="container">
//         <div id="basics" aria-label="Basic information">
//             <h3>${name}</h3>
//             <p>Location: ${location}</p>
//         </div>
//         <div id="bio" aria-labelledby="#bio-header">
//             <h3 id="bio-header">Bio</h3>
//             <p>
//                 ${bio}
//             </p>
//         </div>
//         <div id="on-the-web" aria-labelledby="#on-the-web-header">
//             <h3>On The Web</h3>
//             <ul>
//                 <li>Github: <a href="https://www.github.com/${githubUserName}">${githubUserName}</a></li>
//                 <li>LinkedIn: <a href="https://www.linkedin.com/in/${linkedInUserName}/">${linkedInUserName}</a></li>
//             </ul>
//         </div>
//     </div>
// </body>
// </html>`
// }
// inquirer
//     .prompt([{
//             name: 'name',
//             message: 'What is your name? '
//         },
//         {
//             name: 'location',
//             message: 'What is your location?'
//         },
//         {
//             name: 'bio',
//             message: 'Type a short bio: '
//         },
//         {
//             name: 'githubUserName',
//             message: 'What is your GitHub user name? '
//         },
//         {
//             name: 'linkedinUserName',
//             message: 'What is your LinkedIn user name? '
//         }
//     ])
//     .then(function (answers) {
//         return getHtmlOutput(answers);
//     })
//     .then(function (htmlOutput) {
//         return thenableWriteFile('./portfolio.html', htmlOutput);
//     })
//     .then(function () {
//         console.log('All done!');
//     })
//     .catch(function (error) {
//         console.log('Oh noes! An error!', error);
//     });