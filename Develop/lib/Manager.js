//manager constructor from the employee constructor.
const Employee = require("../lib/Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    //managers have an office number and is a point on contact and needs to added the card.
    getOfficeNumber(){
        return(this.officeNumber);
    };

    getPosition(){
        return "Manager";
    };
};

module.exports = Manager;