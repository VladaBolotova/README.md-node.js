// TODO: Include packages needed for this application

const inquirer  = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [    {
    name:"title",
    message: "What is your title project?",
    type:"text",
},     {
    name:"Description",
    message:"What is the description of your project ?",
    type:"text"
},]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
