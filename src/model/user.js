const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    employee_name:{
        type:String
    },
    nationalId:{
        type:Number
    },
    phone_number:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    birth_date:{
        type:Date
    },
    status:{
        type:String
    },
    position:{
        type:String
    }
});

const User = mongoose.model("User",UserSchema);
module.exports = User;
