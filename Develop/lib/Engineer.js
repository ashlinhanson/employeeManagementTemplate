//Engineer constructor from the Employee constructor
const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };
    //engineers use github and need that added to their card
    getGithub(){
        return(this.github);
    };

    getPosition(){
        return "Engineer";
    };
};

module.exports = Engineer;