//manager constructor from the employee constructor.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    //managers have an office number and is a point on contact and needs to added the card.
    getOfficeNumber(){
        return(this.officeNumber);
    };

    getRole(){
        return "Manager";
    };
};

module.exports = Manager;