const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const appendCard = require('./templates/appendCard');

//starting at neg1 so count matches index. need this to keep 3 members per html row.
var employeeCount = -1;
var tempStore = [];

inquirer.prompt([{
    type: 'confirm',
    message: 'Would you like to add a new team member? ',
    name: 'confirm'
}]).then(r => {
    if (r.confirm) {
        employeeCount++;
        captureEmployee();
    }
    return;
}).catch(err => { console.log(err) });

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
            data=tempStore[0];
            tempStore =[];

            let manager = new Manager(data.name,data.id,data.email,r.officeNumber);

            let appendMgr = new appendCard(manager,employeeCount);
            appendMgr.createManager();

        }).catch(err => { console.log(err) });
    }
    else if (data.role === 'Engineer') {
        inquirer.prompt([{
            type: 'input',
            message: 'Please input employee github username: ',
            name: 'github'
        }]).then(r => {
            data=tempStore[0];
            tempStore =[];

            let eng = new Engineer(data.name,data.id,data.email,r.github);

        }).catch(err => { console.log(err) });
    }
    else if (data.role === 'Intern') {
        inquirer.prompt([{
            type: 'input',
            message: "Please input employee's current school: ",
            name: 'school'
        }]).then(r => {
            data=tempStore[0];
            tempStore =[];

            let intern = new Intern(data.name,data.id,data.email,r.school);


        }).catch(err => { console.log(err) });
    }
}