const express = require("express");
const router = express.Router();
const EmployeeController = require('../controllers/employee');

router.post("/employees",EmployeeController.creat_employee)

module.exports = router