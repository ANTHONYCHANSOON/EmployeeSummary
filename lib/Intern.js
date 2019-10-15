const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, school) {
        super(name, id, title);
        this.school = school;
    }
    getSchool() {
        return this.school = school;
    }

    getrole() {
        return title = "Intern";
    }
}

module.exports = Intern;

//code work for reference
// const newintern = new Intern ("int",2,"","dls csb");
// console.log(newintern);
// newintern.getrole();
// console.log(newintern);