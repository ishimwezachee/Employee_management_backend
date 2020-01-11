const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
   name:{
       type:String
   },
   nationalId:{
       type:Number
   },
   phone:{
       type:String
   },
   email:{
       type:String
   },
   birth_date:{
       type:Date
   },
   status:{
       type:String
   },
   position: {
       type:String
   }
});

const Employee = mongoose.model("Employee",employeeSchema);
module.exports = Employee ;