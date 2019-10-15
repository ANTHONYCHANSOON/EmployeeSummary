const inquirer = require("inquirer");
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");

inquirer.prompt([
    //for the manager
    {
        type: "input",
        name: "name",
        message: "Enter Manager's Name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID"
    },
    {
        type: "input",
        name: "officeno",
        message: "Office Number"
    }
]).then(function ({ name, id, officeno }) {

    const newmanager = new manager(name, id, "", officeno);
    newmanager.getrole();
    console.log(newmanager);


    inquirer.prompt([
        {
            type: "list",
            message: "Intern or Engineer",
            name: "pick",
            choices: [
                "Engineer",
                "Intern",
            ]
        }
    ]).then(function ({ pick }) {

        // pick is an array. select 0 for 1st array from pick
        console.log(pick);

        if (pick === "Engineer") {
            console.log("will add engineer");

            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter Engineer's Name"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter ID"
                },
                {
                    type: "input",
                    name: "github",
                    message: "github"
                }

            ]).then(function ({ name, id, github }) {
                console.log(name);
                console.log(id);
                console.log(github);


                const newengineer = new engineer(name, id, "", github);
                newengineer.getrole();
                console.log(newengineer);

            })










        } else

            if (pick === "Intern") {

                console.log("will add Intern");

                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter Intern's Name"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Enter ID"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "school"
                    }

                ]).then(function ({ name, id, school }) {
                    console.log(name);
                    console.log(id);
                    console.log(school);


                    const newintern = new intern(name, id, "", school);
                    newintern.getrole();
                    console.log(newintern);

                })
            }



    })



})

function addengineer() {

}