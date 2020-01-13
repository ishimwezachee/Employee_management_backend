const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports  = (req,res,next)=>{
let emailMessage;
emailMessage = "hello there";

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.MY_EMAIL,
        pass:process.env.MY_PASSWORD
    }
});

const emailOptions = {
    from:process.env.MY_EMAIL,
    to:"limitless.divinee@gmail.com",
    subject:"Sending Email using Node.js",
    text:`Hi emaployee, congratilution for you are hired in our company`
};

transporter.sendMail(emailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
     console.log('Message Sent: ' + info.response);
     console.log('Email Message: ' + emailMessage);
    }
})
}