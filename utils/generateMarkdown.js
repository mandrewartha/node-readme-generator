// TODO: Create a function that returns a license badge based on which license is passed in

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (typeof data.license.value === "string") {
//   if (data.license.value === "MIT") {
//    `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
// } else if (data.license.value === "APACHE 2.0") {
//   `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
// } else if (data.license.value === "GPL 3.0") {
//   `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
// } else if (data.license.value === "BSD 3") {
//   `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
// }
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return `# ${data.title} \n
# Description
## ${data.description} \n 
![License](https://img.shields.io/badge/License-${data.license}-yellow.svg)
## Table of contents:
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#credits)
- [Questions](#license)
## Installation
To install use ${data.install}
## Usage
 ${data.userInfo}
## Tests 
 Test with ${data.test}
## Contributing
${data.contrib}
## Questions
If you have any questions you can contact me at ${data.email}. You can find me on github as ${data.githubName}
`
}

module.exports = generateMarkdown;
