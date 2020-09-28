//intern constructor from the employee constructor
const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school;
    };
    //interns generally come from a school and need this listed on their card.
    getSchool(){
        return(this.school);
    };

    getPosition(){
        return "Intern";
    };
};

module.exports = Intern;