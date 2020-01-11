const Employee = require("../model/employee");

//============================================ create 
exports.creat_employee = async (req,res,next)=>{
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