const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const renderer = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

function employeeInfo(){
    return inquirer.prompt([
        {
            type: "list",
            message: "What type of employee would you like add?",
            name: "name",
            choices: ["Intern", "Engineer", "Manager"],
        },
    ]).then(val => {
        if (val.name === "Intern"){
            internInfo();
        }else if(val.name === "Engineer"){
            engineerInfo();
        }else if(val.name === "Manager"){
            managerInfo();
        }
    })
}

function managerInfo(){
    return inquirer.prompt([
        {
            message: "What is the manager's name?",
            name: "name"
        },
        {
            message: "What is the manager's id?",
            name: "id"
        },
        {
            message: "What is the manager's email?",
            name: "email"
        },
        {
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
    ]).then(function(answer){
        let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
        team.push(manager);

        employeeInfo()
    })
};

function engineerInfo(){
    return inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's id?",
            name: "id"
        },
        {
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            message: "What is the engineer's github "
        }
    ])
}