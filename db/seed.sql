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

INSERT INTO employeeTable (id, first_name, last_name, role_id, manager_id)
VALUES
(2589, "Liam", "Smith"),
(6324, "Olivia", "Jones"),
(9623, "Noah", "Johnson"),
(8961, "Ryan", "Ruiz"),
(7136, "Samuel", "Gonzalez"),
(5835, "Emma", "Franklin"),
(3001, "Oliver", "Williams"),
(8132, "Ava", "Perez"),
(6619, "William", "Jones"),
(4552, "Sophia", "Garcia"),
(3618, "Elijah", "Miller"),
(3188, "Isabella", "Davis"),
(1523, "James", "Wilson"),
(1580, "Charlotte", "Anderson"),
(6176, "Benjamin", "Thomas"),
(6238, "Tyler", "Lopez"),
(8089, "Amelia", "Taylor"),
(2656, "Lucas", "Moore"),
(0681, "Mia", "Jackson"),
(7461, "Ethan", "Martin"),
(6372, "Mason", "Lee"),
(3704, "Harper", "Thompson"),
(4187, "Ethan", "Harris"),
(5225, "Evelyn", "Clark"),
(8468, "Jacob", "Lewis")