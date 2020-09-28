//intern constructor from the employee constructor
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };
    //interns generally come from a school and need this listed on their card.
    getSchool(){
        return(this.school);
    };

    getRole(){
        return "Intern";
    };
};

module.exports = Intern;