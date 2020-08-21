const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createCard = require('./lib/createCard');

//helper to move fn data to .then()'s
var tempStore = [];

//list of html cards of team members + html template info
const employeeList = [];
//Head HTML Template
fs.readFile('./templates/head.html','utf8', (err, data) => {
    if (err) throw err;
    employeeList.push(data)
});

const initPrompt = () => {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Would you like to add a new team member? ',
        name: 'confirm'
    }]).then(r => {
        if (r.confirm) {

            captureEmployee();
        }
        else {
            constructHTML(employeeList);
        }
        return;
    }).catch(err => { console.log(err) });
}
initPrompt();

const captureEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'Please choose a role for your new employee:',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    },
    {
        type: 'input',
        message: "Please enter Employee's name:",
        name: 'name'
    },
    {
        type: 'number',
        message: 'Please enter Employee ID number:',
        name: 'id'
    },
    {
        type: 'email',
        message: 'Please enter Employee email address:',
        name: 'email'
    }
    ]).then(r => {
        captureEmployeeDetails(r);
    }).catch(err => { console.log(err) });
}

const captureEmployeeDetails = (data) => {
    tempStore.push(data);
    if (data.role === 'Manager') {
        inquirer.prompt([{
            type: 'number',
            message: 'Please input office number:',
            name: 'officeNumber'
        }]).then(r => {
            data = tempStore[0];
            tempStore = [];

            let manager = new Manager(data.name, data.id, data.email, r.officeNumber);
            employeeList.push(createCard.createManager(manager));
            initPrompt();
        }).catch(err => { console.log(err) });
    }
    else if (data.role === 'Engineer') {
        inquirer.prompt([{
            type: 'input',
            message: 'Please input employee github username: ',
            name: 'github'
        }]).then(r => {
            data = tempStore[0];
            tempStore = [];

            let eng = new Engineer(data.name, data.id, data.email, r.github);
            employeeList.push(createCard.createEngineer(eng));
            initPrompt();
        }).catch(err => { console.log(err) });
    }
    else if (data.role === 'Intern') {
        inquirer.prompt([{
            type: 'input',
            message: "Please input employee's current school: ",
            name: 'school'
        }]).then(r => {
            data = tempStore[0];
            tempStore = [];

            let intern = new Intern(data.name, data.id, data.email, r.school);
            employeeList.push(createCard.createIntern(intern));
            initPrompt();

        }).catch(err => { console.log(err) });
    }
}

const constructHTML = (els) => {
    fs.readFile('./templates/tail.html','utf8',(err,data)=>{
        if (err) throw err;
        els.push(data);
        writeHTML(els);
    })

    const writeHTML = (arr) =>{
        const writeStream = fs.createWriteStream('./output/team.html');
        const pathName = writeStream.path;

        arr.forEach(value => writeStream.write(`${value}\n`));

        writeStream.on('finish', () => {
            console.log(`wrote all the array data to file ${pathName}`);
        });

        writeStream.on('error', (err) => {
            console.error(`There is an error writing the file ${pathName} => ${err}`)
        });

        writeStream.end();
    }
}