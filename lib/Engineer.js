const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,git){
        super(name,id,email);
        this.github = git;
        this.role = 'Engineer';
    }
    getGithub(){
        return this.github;
    }

}

module.exports = Engineer;