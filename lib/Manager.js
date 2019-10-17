const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    //not sure if this is corrects
    getOfficeNumber() {
        return this.officeNumber = this.officeNumber;
    }
}

module.exports = Manager;

//code work for reference
// const newman = new Manager ("man",3,"","12345");
// console.log(newman);
// newman.getrole();
// console.log(newman);