const Employee = require("../model/employee");
const sendEmail = require('../middleware/email_send')

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
  res.status(201).json(employee);
  sendEmail();
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
    if(req.body.position){
        body.position = req.body.position
    }

   const _id = req.params.employeeId;
   const employee = await Employee.findOneAndUpdate({ _id }, body);
   res.status(200).json('employee is updated successfully')
  }
  //=========================================== update employee active/suspend
  exports.modify_employee_suspend_and_activate = async (req,res,next)=>{
    let body = {}
    if(req.body.status){
        body.status = req.body.status
    }
   const _id = req.params.employeeId;
   const employee = await Employee.findOneAndUpdate({ _id }, body);
   res.status(200).json("status updated successfully")
  }
//=========================================== delete employee
exports.delete_employee = async (req,res,next)=>{
    const _id = req.params.employeeId;
    const employee = await Employee.deleteOne({_id});
    res.status(200).json(employee)
  }
//====================================================== search by name
  exports.get_employee_by_name = async (req,res,next)=>{
    const {name} = req.params
    console.log(name)
    const employee = await Employee.findOne({name:name});
    res.status(200).json(employee)
}
//====================================================== search by email
exports.get_employee_by_email = async (req,res,next)=>{
  const {email} = req.params
  console.log(email)
  const employee = await Employee.findOne({email:email});
  res.status(200).json(employee)
}
//====================================================== search by position: 
exports.get_employee_by_position = async (req,res,next)=>{
  const {position} = req.params
  const employee = await Employee.findOne({position:position});
  res.status(200).json(employee)
}