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

// View Main Menu
const mainMenuPrompt = [
    {
        type: "list",
        name: "mainMenuChoices",
        message: "Select from the following choices: ",
        choices: [
            "View All Employees",
            "View All Employess By Department",
            "View All Employees By Role",
            "View All Employees By Manager",
            "View Department Salary Budget",
            "Add Employee",
            "Add Department",
            "Add Employee Role",
            "Delete Employee",
            "Delete Department",
            "Delete Employee Role",
            "Update Employee Role",
            "Update Employee Manager",
            "Exit"
        ]
    }
]

// View Results
const mainMenu = () => {
    inquirer.prompt(mainMenuPrompt)
    .then((answer) => {
        switch (answer.mainMenuChoices) {
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Employees By Department":
                viewAllEmployeesByDepartment();
                break;
            case "View All Employees By Role":
                viewAllEmployeesByRole();
                break;
            case "View All Employees By Manager":
                viewAllEmployeesByManager();
                break;
            case "View Department Salary Budget":
                viewDepartmentSalaryBudget();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Employee Role":
                addEmployeeRole();
                break;
            case "Delete Employee":
                deleteEmployee();
                break;
            case "Delete Department":
                deleteDepartment();
                break;
            case "Delete Employee Role":
                deleteEmployeeRole();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Update Employee Manager":
                updateEmployeeManager();
            case "Exit":
                exit();
                break;
        }
    })
}

viewAllEmployees = () => {
    const query = "Select * FROM employee_table;";
    connection.query(query, (err, results) => {
        if(err) throw err;
        console.table(results);
    })
};

viewAllEmployeesByDepartment();

viewAllEmployeesByRole();

viewAllEmployeesByManager();

viewDepartmentSalaryBudget();

addEmployee();

addDepartment();

addEmployeeRole();

deleteEmployee();

deleteDepartment();

deleteEmployeeRole();

updateEmployeeRole();

updateEmployeeManager();

exit();
