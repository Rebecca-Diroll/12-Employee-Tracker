const inquirer = require("inquirer");
const mysql = require("mysql");
// const { rootCertificates } = require("node:tls");

const connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1234",
    database: "employee_db",
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

const viewAllEmployees = () => {
    const query = "Select * FROM employee_table;";
    connection.query(query, (err, results) => {
        if(err) throw err;
        console.table(results);
        mainMenu();
    })
};

const viewAllEmployeesByDepartment = () => {};
// find departments, inquire, find the one department, join
//    const query = "Select * FROM"

const viewAllEmployeesByRole = () => {};

const viewAllEmployeesByManager = () => {};

const viewDepartmentSalaryBudget = () => {};

const addEmployee = () => {};

const addDepartment = () => {
    inquirer.prompt ({
        name: "dept_table",
        type: "input",
        message: "Enter the new department name: ",
    })
        .then((answer) => {
            const sql = "INSERT INTO dept_table (name) VALUES (?)";
            connection.query(sql, answer.dept_table, (err, res) => {
                console.error(err);
                if (err) throw err;
                console.log("Department has been added.");
            });
            mainMenu();
        });
};

const addEmployeeRole = () => {};

const deleteEmployee = () => {};

const deleteDepartment = () => {};

const deleteEmployeeRole = () => {};

const updateEmployeeRole = () => {};

const updateEmployeeManager = () => {};

const exit = () => {};

mainMenu();