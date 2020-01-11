const Employee = require("../model/employee");

//============================================ create 
exports.create_employee = async (req,res,next)=>{
let employee = new Employee({
    name:req.body.name,
    nationalId:req.body.nationalId,
    phone:req.body.phone,
    email:req.body.email,
    birth_date:req.body.birth_date,
    status:req.body.status,
    position:req.body.position
});
  employee = await employee.save();
  res.status(201).json(employee)
}

//=========================================== delete employee
exports.delete_employee = async (req,res,next)=>{
    const _id = req.params.employeeId;
    const employee = await Employee.deleteOne({_id});
    res.status(200).json(employee)
  }