USE employee_db;

INSERT INTO dept_table(dept_id, dept_name)
VALUES
(NULL, "Accounting"),
(NULL, "Engineering"),
(NULL, "Finance"),
(NULL, "Human Resources"),
(NULL, "Legal"),
(NULL, "Manufacturing"),
(NULL, "Sales");

INSERT INTO role_table(role_id, title, salary, dept_id)
VALUES
(NULL, "Accountant", 73000, 1),
(NULL, "Accounting Manager", 101000, 1),
(NULL, "Junior Software Engineer", 65000, 2),
(NULL, "Senior Software Engineer", 110000, 2),
(NULL, "Engineering Manager", 140000, 2),
(NULL, "Financial Analyst", 83000, 3),
(NULL, "Finance Manager", 134000, 3),
(NULL, "Human Resources Specialist", 63000, 4),
(NULL, "Human Resources Manager", 121000, 4),
(NULL, "Paralegal", 53000, 5),
(NULL, "Lawyer", 127000, 5),
(NULL, "General Laborer", 31000, 6),
(NULL, "Operations Manager", 103650, 6),
(NULL, "Sales Representatives", 86000, 7),
(NULL, "Sales Manager", 132000, 7);

INSERT INTO employee_table (employee_id, first_name, last_name, role_id, manager_id)
VALUES
(NULL, "Olivia", "Jones", 2, NULL),
(NULL, "Samuel", "Gonzalez", 5, NULL),
(NULL, "Oliver", "Williams", 7, NULL),
(NULL, "William", "Jones", 9, NULL),
(NULL, "Elijah", "Miller", 11, NULL),
(NULL, "James", "Wilson", 13, NULL),
(NULL, "Benjamin", "Thomas", 15, NULL);

INSERT INTO employee_table (employee_id, first_name, last_name, role_id, manager_id)
VALUES
(NULL, "Liam", "Smith", 1, 1),
(NULL, "Tyler", "Lopez", 1, 1),
(NULL, "Noah", "Johnson", 3, 2),
(NULL, "Amelia", "Taylor", 3, 2),
(NULL, "Evelyn", "Clark", 3, 2),
(NULL, "Lucas", "Moore", 4, 2),
(NULL, "Ryan", "Ruiz", 4, 2),
(NULL, "Jacob", "Lewis", 4, 2),
(NULL, "Emma", "Franklin", 6, 3),
(NULL, "Mia", "Jackson", 6, 3),
(NULL, "Ava", "Perez", 8, 4),
(NULL, "Ethan", "Martin", 8, 4),
(NULL, "Sophia", "Garcia", 10, 5),
(NULL, "Mason", "Lee", 10, 5),
(NULL, "Isabella", "Davis", 12, 6),
(NULL, "Harper", "Thompson", 12, 6),
(NULL, "Charlotte", "Anderson", 14, 7),
(NULL, "Ethan", "Harris", 14, 7);
