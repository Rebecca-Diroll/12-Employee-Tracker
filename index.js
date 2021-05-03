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
            "View All Departments",
            // "View All Employees By Department",
            "View All Roles",
            // "View All Employees By Role",
            // "View All Employees By Manager",
            // "View Department Salary Budget",
            "Add Employee",
            "Add Department",
            "Add Employee Role",
            // "Delete Employee",
            // "Delete Department",
            // "Delete Employee Role",
            "Update Employee Role",
            // "Update Employee Manager",
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
            case "View All Departments":
                viewAllDepartments();
                break;
            // case "View All Employees By Department":
            //     viewAllEmployeesByDepartment();
            //     break;
            case "View All Roles":
                viewAllRoles();
                break;
            // case "View All Employees By Role":
            //     viewAllEmployeesByRole();
            //     break;
            // case "View All Employees By Manager":
            //     viewAllEmployeesByManager();
            //     break;
            // case "View Department Salary Budget":
            //     viewDepartmentSalaryBudget();
            //     break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Employee Role":
                addEmployeeRole();
                break;
            // case "Delete Employee":
            //     deleteEmployee();
            //     break;
            // case "Delete Department":
            //     deleteDepartment();
            //     break;
            // case "Delete Employee Role":
            //     deleteEmployeeRole();
            //     break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            // case "Update Employee Manager":
            //     updateEmployeeManager();
            case "Exit":
                exit();
                break;
        }
    })
}

// viewAllEmployees works
const viewAllEmployees = () => {
    const query = "SELECT * FROM employee_table;";
    connection.query(query, (err, results) => {
        if(err) throw err;
        console.table(results);
        mainMenu();
    })
};

// viewAllDepartments works
const viewAllDepartments = () => {
    const query = "SELECT * FROM dept_table;";
    connection.query(query, (err, results) => {
        if(err) throw err;
        console.table(results);
        mainMenu();
    })
};

// const viewAllEmployeesByDepartment = () => {};

// viewAllRoles works
const viewAllRoles = () => {
    const query = "SELECT * FROM role_table;";
    connection.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    })
};

const viewAllEmployeesByRole = () => {};

// const viewAllEmployeesByManager = () => {};

// const viewDepartmentSalaryBudget = () => {};

// addEmployee works
const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter first name: "
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter last name: "
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter role id: "
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter manager id:"
        },
    ])
    .then((answer) => {
        connection.query("INSERT into employee_table SET ?", {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
        })
        console.log("Employee has been added.");
        viewAllEmployees();
        mainMenu();
    })
};

// addDepartment works
const addDepartment = () => {
    inquirer.prompt ({
        name: "dept_table",
        type: "input",
        message: "Enter new department name: ",
    })
    .then((answer) => {
        const sql = "INSERT INTO dept_table (dept_name) VALUES (?)";
        connection.query(sql, answer.dept_table, (err, res) => {
            console.error(err);
            if (err) throw err;
            console.log("Department has been added.");
            mainMenu();
        });
    });
};

// addEmployeeRole works
const addEmployeeRole = () => {
    inquirer.prompt ([
            {
                type: "input",
                name: "title",
                message: "Enter new employee role: "
            },
            {
                type: "input",
                name: "salary",
                message: "Enter salary: "
            },
            {
                type: "input",
                name: "dept_id",
                message: "Enter department id: "
            },
    ])
    .then((answer) => {
        connection.query("INSERT INTO role_table SET ?", {
            title: answer.title,
            salary: answer.salary,
            dept_id: answer.dept_id
        })
        console.log("Employee role has been added.")
        viewAllRoles();
        mainMenu();
    });
};

// const deleteEmployee = () => {};

// const deleteDepartment = () => {};

// const deleteEmployeeRole = () => {};

// updateEmployeeRole works
const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "employee_id",
            message: "Enter the employee id: "
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter updated role id: "
        },
    ])
    .then ((answer) => {
        const query = `UPDATE employee_table SET role_id = ${answer.role_id} WHERE employee_id = ${answer.employee_id};`
        connection.query(query, (err, res) => {
            console.error(err);
            if (err) throw err;
            console.log("Employee role has been update.");
            mainMenu();
        });
    });
};

// const updateEmployeeManager = () => {};

const exit = () => {
    process.exit(0);
};

mainMenu();