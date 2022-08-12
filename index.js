const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const employeeQs = [
    {name: 'fullname',
    message: 'Please enter a name.',
    type: 'input'},
    {name: 'email',
    message: 'Please enter an email.',
    type: 'input'},
    {name: 'id',
    message: 'Please enter an ID.',
    type: 'input'}
]

function promptManager() {
    //manager-specific question wants office number
    const officeQ = {
        name: 'officeNumber',
        message: 'Please enter an office number.',
        type: 'input'}
    //add manager-specific question to the standard questions
    const managerQs = employeeQs.push(officeQ)
    //get info from command line and create manager
    inquirer.prompt(managerQs)
    .then(response => {
        const {fullname,email,id,officeNumber} = response
        new Manager(fullname,id,email,officeNumber)
    })
}

function promptEngineer() {
    //engineer-specific question wants office number
    const githubQ = {
        name: 'github',
        message: 'Please enter a Github username.',
        type: 'input'}
    //add engineer-specific question to the standard questions
    const engineerQs = employeeQs.push(githubQ)
    //get info from command line and create engineer
    inquirer.prompt(engineerQs)
    .then(response => {
        const {fullname,email,id,github} = response
        new Engineer(fullname,id,email,github)
    }) 
}

function promptIntern() {
    //intern-specific question wants office number
    const schoolQ = {
        name: 'school',
        message: 'Please enter a school name.',
        type: 'input'}
    //add intern-specific question to the standard questions
    const internQs = employeeQs.push(schoolQ)
    //get info from command line and create intern
    inquirer.prompt(internQs)
    .then(response => {
        const {fullname,email,id,school} = response
        new Manager(fullname,id,email,school)
    })
}

function askForNextEmployee() {
    inquirer
      .prompt([
        {
          type: "choice",
          name: "choice",
          message: "Add another employee:",
          choices: ['Engineer','Intern','Finished Building Team']
        }
      ])
      .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.choice === 'Engineer') {
          promptEngineer();
        } else if (val.choice==='Intern'){
            promptIntern()
        } else {
          quit();
        }
      });
  }

  function quit() {
    console.log("\nTeam Created");
    process.exit(0);
  }