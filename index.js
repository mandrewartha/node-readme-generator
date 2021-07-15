
const fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



inquirer
  .prompt([
    {
        type: "input",
        message: "Title of Project:",
        name: "title",
    },
    {
        type:"input",
        message: "Please input a short description:",
        name: "description",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "githubName"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "list",
        message: "Which license do you want to use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
        name: "license"
    },
    {
        type: "input",
        message: "How do you install?",
        default: "npm install",
        name: "install"
    },
    {
        type:"input",
        message: "How do you run tests?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "What should the user know about your repo?",
        name: "userInfo"
    },
    {
        type: "input",
        message: "What does your user need to know about contributing?",
        name: "contrib"
    }
  ])
  .then((answers) => {

    fs.writeFile("README.md", generateMarkdown(answers), (err) => 
        err ? console.log(err) : console.log("Successfully created README.md!"))
  })



