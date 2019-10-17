class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name = this.name;
    }

    getId() {
        return this.id = this.id;
    }

    getEmail() {
        return this.email = this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
