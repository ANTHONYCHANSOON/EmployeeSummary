const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, github) {
        super(name, id, title);
        this.github = github;
    }

    getrole() {
        return title = "Engineer";
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