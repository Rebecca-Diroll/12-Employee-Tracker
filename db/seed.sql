USE employeeDB;

INSERT INTO departmentTable(id, dept_name)
VALUES
(01, "Accounting"),
(02, "Engineering"),
(03, "Finance"),
(04, "Human Resources"),
(05, "Legal"),
(06, "Manufacturing"),
(07, "Sales");

INSERT INTO roleTable(id, title, salary, department_id)
VALUES
("Accountant"),
("Accounting Manager"),
("Junior Software Engineer"),
("Senior Software Engineer"),
("Engineering Manager"),
("Financial Analyst"),
("Finance Manager"),
("Human Resources Coordinator"),
("Human Resources Manager"),
("Paralegal"),
("Lawyer"),
("General Laborer"),
("Plant Manager"),
("Sales Assistant"),
("Sales Manager")