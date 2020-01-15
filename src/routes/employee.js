const express = require("express");
const router = express.Router();
const EmployeeController = require('../controllers/employee');
const checkAuth = require("../middleware/check_auth");

router.post("/employees",EmployeeController.create_employee);
router.delete("/employees/:employeeId",EmployeeController.delete_employee);
router.patch("/employees/:employeeId",EmployeeController.modify_employee);
// router.patch("/employees/:employeeId/status",EmployeeController.modify_employee_suspend_and_activate);
//=======================================================================================================Search 
router.get("/employees/:name",EmployeeController.get_employee_by_name);
router.get("/employees/v2/:position",EmployeeController.get_employee_by_position);
router.get("/employees/v3/:email",EmployeeController.get_employee_by_email);
module.exports = router;