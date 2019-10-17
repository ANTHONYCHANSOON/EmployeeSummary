const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github = this.github;
    }
}

module.exports = Engineer;


//code work for reference
// const newenginner = new Engineer("engineeeeer",1,"","no github");
// console.log(newenginner);
// newenginner.getrole();
// console.log(newenginner);