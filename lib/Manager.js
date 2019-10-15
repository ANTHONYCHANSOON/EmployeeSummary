const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }

    getrole() {
        return title = "Engineer";
    }

    //not sure if this is corrects
    getoffice() {
        return this.officeNumber = this.officeNumber;
    }
}

module.exports = Manager;

//code work for reference
// const newman = new Manager ("man",3,"","12345");
// console.log(newman);
// newman.getrole();
// console.log(newman);