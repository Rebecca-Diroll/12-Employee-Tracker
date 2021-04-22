const inquirer = require("inquirer");
const mysql = require("mysql");
const { rootCertificates } = require("node:tls");

const connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1234",
    database: "employeeDB",
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

const addViewUpdateAnswer = () => {
    inquirer.prompt(addViewUpdatePrompt)
    .then((answer) => {
        switch (answer.options) {
            case "View":
                viewQuestions();
                break;
            case "Update":
                updateQuestions();
                break;
            case "Add to":
                addToQuestions();
                break;
            case "Delete":
                deleteQuestions();
                break;
        }
    })
}