

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
    },
    {
        name:"Email",
        message:"What is your email?",
        type:"input",
     
    },
    {
        name:"GitHub",
        message:"What is your GitHub repository?",
        type:"input",
      
        
    }

]).then(response=>{
    console.log(JSON.stringify(response));

const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

const README1 = 
`# ${response.title}

## Description
${response.Description}

-[Itstallation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)


## Installation:
 ${response.Installation}
## Usage:
 ${response.Usage}
## Credits:
 ${response.Credits}
## License: 
 ${response.License}

# Questions:
* Email: ${response.Email}
* GitHub: ${response.GitHub}
        `
       
        fs.writeFile('README1.md', README1, (err)=>
        err ? console.error(err) : console.log('Commit logged'));
         for(const outputCyanText of README1){
            console.log( '\x1b[36m%s\x1b[0m',outputCyanText);
          }
})