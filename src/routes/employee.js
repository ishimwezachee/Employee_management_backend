const express = require("express");
const router = express.Router();
const EmployeeController = require('../controllers/employee');

router.post("/employees",EmployeeController.create_employee);
router.delete("/employees/:employeeId",EmployeeController.delete_employee);
router.patch("/employees/:employeeId",EmployeeController.modify_employee);
router.patch("/employees/:employeeId/activate",EmployeeController.modify_employee_suspend_and_activate);
router.patch("/employees/:employeeId/suspend",EmployeeController.modify_employee_suspend_and_activate);
module.exports = router