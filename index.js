const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const pageMaker = require('./src/pageMaker');
const fs = require('fs');

const employeeQs = [
    {prefix: '\n',
    name: 'fullname',
    message: 'Please enter a name.',
    type: 'input'},
    {name: 'email',
    message: 'Please enter an email.',
    type: 'input'},
    {name: 'id',
    message: 'Please enter an ID.',
    type: 'input'}
]

let team = [];

function writeHTML() {
    fs.writeFile('./output/index.html', pageMaker(team), function (err) {
    if (err) throw err;
    console.log('Saved HTML file!');
    }); 
}

function promptManager() {
    //manager-specific question wants office number
    const officeQ = {
        name: 'officeNumber',
        message: 'Please enter an office number.',
        type: 'input'}
    //add manager-specific question to the standard questions
    const managerQs = [...employeeQs]
    managerQs.push(officeQ)
    //get info from command line and create manager
    inquirer.prompt(managerQs)
    .then(response => {
        const {fullname,email,id,officeNumber} = response
        team.push(new Manager(fullname,id,email,officeNumber))
        askForNextEmployee();
    })
}

function promptEngineer() {
    //engineer-specific question wants office number
    const githubQ = {
        name: 'github',
        message: 'Please enter a Github username.',
        type: 'input'}
    //add engineer-specific question to the standard questions
    const engineerQs = [...employeeQs];
    engineerQs.push(githubQ);
    //get info from command line and create engineer
    inquirer.prompt(engineerQs)
    .then(response => {
        const {fullname,email,id,github} = response;
        team.push(new Engineer(fullname,id,email,github));
        askForNextEmployee();
    }) 
}

function promptIntern() {
    //intern-specific question wants office number
    const schoolQ = {
        name: 'school',
        message: 'Please enter a school name.',
        type: 'input'}
    //add intern-specific question to the standard questions
    const internQs = [...employeeQs];
    internQs.push(schoolQ);
    //get info from command line and create intern
    inquirer.prompt(internQs)
    .then(response => {
        const {fullname,email,id,school} = response;
        team.push(new Intern (fullname,id,email,school));
        askForNextEmployee();
    })
}

function askForNextEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Add another employee:",
          choices: ['Engineer','Intern','Finished Building Team']
        }
      ])
      .then(val => {
        // If the user wants to add another person, ask those questions. otherwise quit.
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
    writeHTML(team);
  }

promptManager();