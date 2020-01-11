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

//=========================================== update employee
exports.modify_employee = async (req,res,next)=>{
    let body = {}
    if(req.body.name){
      body.name = req.body.name
    }
    if(req.body.nationalId){
      body.nationalId = req.body.nationalId
    }
    if(req.body.phone){
      body.phone= req.body.phone
    }
    if(req.body.email){
      body.email = req.body.email
    }
    if(req.body.birth_date){
      body.birth_date = req.body.birth_date
    }
    if(req.body.status){
        body.status = req.body.status
      }
    if(req.body.position){
        body.position = req.body.position
    }
   const _id = req.params.employeeId;
   const employee = await Employee.findOneAndUpdate({ _id }, body);
   res.status(200).json(employee)
  }
//=========================================== delete employee
exports.delete_employee = async (req,res,next)=>{
    const _id = req.params.employeeId;
    const employee = await Employee.deleteOne({_id});
    res.status(200).json(employee)
  }