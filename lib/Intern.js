const Employee = require('./Employee.js')
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school=school;
    }

    //getters
    getSchool() {
        return this.school;
    }

    //override getrole
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;