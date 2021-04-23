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
        switch (answer.addViewUpdate) {
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

const viewQuestionsPrompt = [
    {
        type: "list",
        name: "viewQuestionsAnswer",
        message: "Would you like to view the department, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "Department",
            "Employee Roles",
            "Employee List",
            "Employees by Manager",
            "Department Budget"
        ]
    }
]

function viewQuestions = () => {
    inquirer.prompt(viewQuestionsPrompt)
    .then((answer) => {
        switch (answer.viewQuestionsAnswer) {
            case "Department":
                viewDepartment();
                break;
            case "Employee Roles":
                viewByEmployeeRoles();
                break;
            case "Employee List":
                viewEmployeeList();
                break;
            case "Employees by Manager":
                viewEmployeesByManager();
                break;
            case "Department Budget":
                viewDepartmentBudget();
                break;
        }
    })
}