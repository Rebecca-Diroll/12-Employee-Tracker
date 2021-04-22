const inquirer = require("inquirer");
const mysql = require("mysql");
const { rootCertificates } = require("node:tls");

const connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1234",
    database: "employeesDB",
});

const addViewUpdatePrompt = [
    {
        type: "list",
        name: "addViewUpdate",
        message: "Would you like to view, update, add to, or delete from the employee database?",
        choices: [
            "View",
            "Update",
            "Add to",
            "Delete"
        ]
    }
]
