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
(011, "Accountant", 73000, 01),
(012, "Accounting Manager", 101000, 01),
(021, "Junior Software Engineer", 65000, 02),
(022, "Senior Software Engineer", 110000, 02),
(023, "Engineering Manager", 140000, 02),
(031, "Financial Analyst", 83000, 03),
(032, "Finance Manager", 134000, 03),
(041, "Human Resources Specialist", 63000, 04),
(042, "Human Resources Manager", 121000, 04),
(051, "Paralegal", 53000, 05),
(052, "Lawyer", 127000, 05),
(061, "General Laborer", 31000, 06),
(062, "Operations Manager", 103650, 06),
(071, "Sales Representatives", 86000, 07),
(072, "Sales Manager", 132000, 07);