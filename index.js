const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let positionSpecific;
let team = [];
var uniqueIdentifier;

function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hello! What is your role?',
            choices: ['Engineer', 'Intern', 'Manager'],
            name: 'role',
        },

        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'What is your ID?',
            name: 'id',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])

    .then((data) => {
        positionSpecific = ""
        switch (data.role) {
            case 'Manager':
                positionSpecific = 'office number'
                break;

                case 'Engineer':
                    positionSpecific = 'github'
                    break;

                    case 'Intern':
                        positionSpecific = 'school'
                        break;

                        default:
                            break;
        }
        inquirer.prompt([{
            message: `Enter in employee's ${positionSpecific}`,
            name: 'positionOption'
        },
        {
            type: 'list',
            message: 'Would you like to add additional members?',
            choices: ['y','n'],
            name: "additionalMembers"
        }])

        .then((data2) => {
            let dataFull = {
                ...data,
                ...data2,
            };
            team.push(dataFull);

            if (data2.additionalMembers === "y"){
                addEmployee();
            } else {

                const writeHtml = createHtml();
            
            fs.writeFile('team-profile.html', writeHtml, (err) => err ? console.log(err) : console.log('Your team has been created!')
            );    
            };
        });
    });
    };

    function createCards(team) {
        let cardHtml = "";
        for (let i = 0; i < team.length; i++) {
            detailObject = "";
            switch (team[i].role) {
                case 'Manager':
                    uniqueIdentifier = 'Office Number: '
                break;

                case 'Intern':
                    uniqueIdentifier = 'School: '
                
                break; 

                case 'Engineer':
                    uniqueIdentifier = 'GitHub: '
                break;


            default:
                break;
            }

            cardHtml +=
            `
            <main>
            <div class="row card-columns mt-3 justify-content-center">
            <div class="card" style="width: 20rem;">
                <div class="card-body bg-dark text-light">
            <h3 class="card-title text-center"> ${team[i].name} </h3>
            <h4 class="card-subtitle mb-2 text-muted text-center"> ${team[i].role} </h4>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"> ID: ${team[i].id} </li>
              <li class="list-group-item"> Email: <a href="mailto:${team[i].email}"> ${team[i].email} </a></li>
              <li class="list-group-item"> ${uniqueIdentifier}: ${team[i].positionOption} </li>
              </div>
              </main>
            `       
        }
        return cardHtml;
    
    }

    const createHtml = () =>
    `
    <!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE-edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel = "stylesheet" href = "style.css">
    <title>Team Profile Generator</title>
  </head>

  <body>
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid d-flex justify-content-center">
          <h1 class="text-light m-5">My Team</h1>
        </div>
      </nav>
    </header>

    <br>
    <br>

                <!-- replaced by cards created -->
                ${createCards(team)} 

  </html>
    `

    addEmployee();