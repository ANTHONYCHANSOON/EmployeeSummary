const inquirer = require("inquirer");
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");
let team = [];
const fs = require('fs');

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
        name: "email",
        message: "Email"
    },
    {
        type: "input",
        name: "officeno",
        message: "Office Number"
    }
]).then(function ({ name, id, email, officeno }) {

    const newmanager = new manager(name, id, email, officeno);
    //console.log(newmanager);
    team.push(newmanager);
    getEmployee();

})

function getEmployee() {

    //while (employeecounter < maxteammember) {

    inquirer.prompt([
        {
            type: "list",
            message: "Intern or Engineer",
            name: "pick",
            choices: [
                "Engineer",
                "Intern",
                "No more!!!"
            ]
        }
    ]).then(function ({ pick }) {
        //console.log(pick);

        if (pick === "Engineer") {
            getEngineer();
        } else if (pick === "Intern") {
            getIntern();
        } else if (pick === "No more!!!") {
            //console.log(team);
            // manager.getRole();
            // engineer.getRole();
            // intern.getRole();
            divs();
            //pleaseworkhtml();
            //generateHTML();

        }
    })
}

function getIntern() {

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
            name: "email",
            message: "email"
        },
        {
            type: "input",
            name: "school",
            message: "school"
        }
    ]).then(function ({ name, id, email, school }) {

        //let engineerstring = "engineer" + name;
        let newintern = new intern(name, id, email, school);
        //console.log(newintern);
        team.push(newintern)
        getEmployee();

    })

}

function getEngineer() {

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
            name: "email",
            message: "email"
        },
        {
            type: "input",
            name: "github",
            message: "github"
        }
    ]).then(function ({ name, id, email, github }) {

        //let engineerstring = "engineer" + name;
        let newengineer = new engineer(name, id, email, github);
        //console.log(newengineer);
        team.push(newengineer);
        getEmployee();

    })

}


function divs() {

    let managerlist = team.filter(x => x.getRole() === "Manager");
    //console.log("manager list", managerlist);
    let managerCards = managerlist.map(person => `<p id="title">${person.getRole()}</p><p id="info">Name:  ${person.name}</p><p id="info">ID: ${person.id}</p><p id="info">Email:  ${person.email}</p><p id="info">Number:  ${person.officeNumber}</p>`)
    //console.log(managerCards);
    
    //console.log(JSON.stringify(managerCards));
    // for (let x = 0; x < managerlist.length; x++) {
    //     //console.log(managerlist[x].name);

    //     // function managercard() {
    //     //     return `
    //     //     <p>${managerlist[x].name}</p>
    //     //     <br>
    //     //     <p>${managerlist[x].getRole()}</p>
    //     //     <br>
    //     //     <p>${managerlist[x].id}</p>
    //     //     <br>
    //     //     <p>${managerlist[x].email}</p>
    //     //     <br>
    //     //     <p>${managerlist[x].officeNumber}</p>
    //     //     `
    //     // }
    // }


    let engineerlist = team.filter(x => x.getRole() === "Engineer");
    //console.log("engineer list", engineerlist);
    //let engineerCards = engineerlist.map(person => `<p>${person.getRole()}</p><p>${person.name}</p>`)
    // [`<p>Engineer</p><p>Anthony</p>`, `<p>Engineer</p><p>Hanna</p>`, `<p>Engineer</p><p>Zane</p>`]
    let engineerCards = engineerlist.map(person => `<p id = "title2">${person.getRole()}</p><p id="info">Name:  ${person.name}</p><p id="info">ID:  ${person.id}</p><p id="info">Email:  ${person.email}</p><p id="info">Github:  ${person.github}</p>`)
     //console.log(engineerCards);

    // console.log(engineerCards.length);

    // for (counter = 0; counter < engineerlist.length; counter++) {

    // }


    // function engineercard() {
    //     for (let y = 0; y < engineerlist.length; y++) {
    //         console.log("you have " + engineerlist.length + " enginners");

    //         return `
    //         let enginame = $("<p>");
    //         enginame.text(${engineerlist[y].name});

    //         let engiid = $("<p>");
    //         engiid.text(${engineerlist[y].name});

    //         let engiemail = $("<p>");
    //         engiemail.text(${engineerlist[y].name});

    //         let engigithub = $("<p>");
    //         engigithub.text(${engineerlist[y].name});

    //         let engirole = $("<p>");
    //         engirole.text(${engineerlist[y].getRole()});

    //         $("#engineers").append(enginame);
    //         $("#engineers").append(engiid);
    //         $("#engineers").append(engiemail);
    //         $("#engineers").append(engigithub);
    //         $("#engineers").append(engirole);`
    //     }


    //     // function engineercard(){
    //     //     return 
    //     //     <p>${engineerlist[y].name}</p>
    //     //     <br>
    //     //     <p>${engineerlist[y].getRole()}</p>
    //     //     <br>
    //     //     <p>${engineerlist[y].id}</p>
    //     //     <br>
    //     //     <p>${engineerlist[y].email}</p>
    //     //     <br>
    //     //     <p>${engineerlist[y].github}</p>
    //     //     `
    //     // }
    // }


    let internlist = team.filter(x => x.getRole() === "Intern");
    //console.log("intern list", internlist);
    //let internCards = internlist.map(person => `<p>${person.getRole()}</p>`)
    let internCards = internlist.map(person => `<p id = "title2">${person.getRole()}</p><p id="info">Name:  ${person.name}</p><p id="info">ID:  ${person.id}</p><p id="info">Email:  ${person.email}</p><p id="info">School:  ${person.school}</p>`)
    //console.log(JSON.stringify(internCards));


    function generateHTML() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Project!</title>
            <script src="https://code.jquery.com/jquery.js"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
        <div id="header">
        <br>
        <br>
        <h1 id="headertext"> Project # 1</h1>
        </div>
        <br>
        <div class="container">
        <div class="row">
            <div class="col-12" id="manager">
            <p id="titlebanner">MANAGER</p>${managerCards}
            </div>
        </div>
    </div>
            <br>

            <div class="container">
            <div class="row">
                <div class="col-6">

            <p id="titlebanner">ENGINEER</p>${engineerCards}

            </div>
            <div class="col-6">
            
            <p id="titlebanner">INTERN</p>${internCards}
            </div>
            </div>
        </div>

        </body>
        </html>`
    }

    function pleaseworkhtml() {
        fs.writeFile("./output/TEAMMEMBERS.html", generateHTML(), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Done!");
        })
    }
    generateHTML();
    pleaseworkhtml();
}





