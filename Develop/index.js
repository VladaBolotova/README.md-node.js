// TODO: Include packages needed for this application

// const inquirer  = require("inquirer");

// TODO: Create an array of questions for user input
// const questions = [    {
//     name:"title",
//     message: "What is your title project?",
//     type:"text",
// },     {
//     name:"Description",
//     message:"What is the description of your project ?",
//     type:"text"
// },]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
// }

// Function call to initialize app
// init();

const fs = require('fs');

const inquirer=require("inquirer");

inquirer.prompt([
    {
        name:"title",
        message: "What is your title project?",
        type:"text",
    },
    {
        name:"Description",
        message:"What is the description of your project ?",
        type:"text"
    },
    {
        name:"motivation",
        message:"What was your motivation?",
        type:"text"
    },
    {
        name:"reasonOfProject",
        message:"Why did you build this project?",
        type:"text"
    },
    {
        name:"Installation",
        message:"What are the installations?",
        type:"text"
    },
    {
        name:"Usage",
        message:"Usage?",
        type:"text"
    },
    {
        name:"Credits",
        message:"Credits?",
        type:"text"
    },
    {
        name:"License",
        message:"License?",
        type:"list",
        choices: ['MIT', 'Apache', 'No License']
    }

]).then(response=>{
    console.log(JSON.stringify(response));

    const README1 = 
        `   ${response.title}
            ${response.Description}
            ${response.motivation}
            ${response.reasonOfProject}
            ${response.Installation}
            ${response.Credits}
            ${response.License}
        `

        fs.writeFile('README1.md', README1, (err)=>
        err ? console.error(err) : console.log('Commit logged'));
})