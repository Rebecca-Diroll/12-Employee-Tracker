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

const addViewUpdateDeletePrompt = [
    {
        type: "list",
        name: "addViewUpdateDelete",
        message: "Would you like to view, update, add to, or delete from the employee database?",
        choices: [
            "View",
            "Update",
            "Add to",
            "Delete"
        ]
    }
]

const addViewUpdateDeleteAnswer = () => {
    inquirer.prompt(addViewUpdateDeletePrompt)
    .then((answer) => {
        switch (answer.addViewUpdateDelete) {
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
        message: "Would you like to view the departments, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "View Departments",
            "View Employee Roles",
            "View Employee List",
            "View Employees by Manager",
            "View Department Budget"
        ]
    }
]

function viewQuestions = () => {
    inquirer.prompt(viewQuestionsPrompt)
    .then((answer) => {
        switch (answer.viewQuestionsAnswer) {
            case "View Departments":
                viewDepartment();
                break;
            case "View Employee Roles":
                viewByEmployeeRoles();
                break;
            case "View Employee List":
                viewEmployeeList();
                break;
            case "View Employees by Manager":
                viewEmployeesByManager();
                break;
            case "View Department Budget":
                viewDepartmentBudget();
                break;
        }
    })
}

const updateQuestionsPrompt = [
    {
        type: "list",
        name: "updateQuestionsAnswer",
        message: "Would you like to view the departments, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "Update Employee Roles",
            "Update Employee Managers"
        ]
    }
]

function updateQuestions = () => {
    inquirer.prompt(updateQuestionsPrompt)
    .then((answer) => {
        switch (answer.updateQuestionsAnswer) {
            case "Update Employee Roles":
                updateEmployeeRoles();
                break;
            case "Update Employee Managers":
                updateEmployeeManagers();
                break;
        }
    })
}

const addQuestionsPrompt = [
    {
        type: "list",
        name: "addQuestionsAnswer",
        message: "Would you like to view the departments, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "Add Departments",
            "Add Employee Roles",
            "Add Employees",
        ]
    }
]

function addQuestions = () => {
    inquirer.prompt(addQuestionsPrompt)
    .then((answer) => {
        switch (answer.addQuestionsAnswer) {
            case "Add Departments":
                addDepartment();
                break;
            case "Add Employee Roles":
                addEmployeeRoles();
                break;
            case "Add Employees":
                addEmployees();
                break;
        }
    })
}

const deleteQuestionsPrompt = [
    {
        type: "list",
        name: "deleteQuestionsAnswer",
        message: "Would you like to view the departments, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "Delete Departments",
            "Delete Employee Roles",
            "Delete Employees",
        ]
    }
]

function deleteQuestions = () => {
    inquirer.prompt(deleteQuestionsPrompt)
    .then((answer) => {
        switch (answer.deleteQuestionsAnswer) {
            case "Delete Departments":
                deleteDepartment();
                break;
            case "Delete Employee Roles":
                deleteEmployeeRoles();
                break;
            case "Delete Employees":
                deleteEmployees();
                break;
        }
    })
}