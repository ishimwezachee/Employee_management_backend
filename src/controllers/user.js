const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");


exports.signup = async (req,res,next)=>{
    try {
        let user = User.find({email:req.body.email});
        console.log(user)
    if(user){
        return res.status(409).json("you already have an account")
    }else{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        let user = new User({
            employee_name:req.body.employee_name,
            nationalId:req.body.nationalId,
            phone_number:req.body.phone_number,
            email:req.body.email,
            password:hashedPassword,
            birth_date:req.body.birth_date,
            status:req.body.status,
            position:req.body.position
        });
        user = await user.save();
        console.log(user);
        res.status(201).json(user);

    }
    } catch (error) {
       res.status(500).json({Error:error}) 
    }
}