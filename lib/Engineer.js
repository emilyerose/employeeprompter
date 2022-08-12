const Employee = require('./Employee.js')
class Engineer extends Employee {
    constructor(name,id,email,gituser) {
        super(name,id,email);
        this.github=gituser;
    }

    //getters
    getGithub() {
        return this.github;
    }

    //getRole override
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;