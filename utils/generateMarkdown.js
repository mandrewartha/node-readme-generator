
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
