const inquirer = require('inquirer');

inquirer.prompt([{
    type:'input',
    message:'testing',
    name:'test'
}]).then(r =>{
    
}).catch(err=>{console.log(err)});