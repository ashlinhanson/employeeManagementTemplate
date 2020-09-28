// main constructor for each  position. 

class Employee {
    constructor(name, id, email){//name id and email are used by all positions
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //functions for each piece of info listed above
    getName(){
        return(this.name);
    };

    getId(){
        return(this.id);
    };

    getEmail(){
        return(this.email);
    };

    getRole(){
        return("Employee")
    };
};

module.exports = Employee;


