const express=require("express");

const router=express.Router();

const Register=require("../model/register.schema");

const jwt=require("jsonwebtoken");

require("dotenv").config();


const generateToken=(user)=>{
    return token = jwt.sign({user},process.env.JSON_WEB_TOKEN);
}

router.post("/register",async(req,res)=>{
    try {
        let register=await Register.findOne({email:req.body.email});
        if(register){
           return res.status(400).send("User Already Exists");
        }
        register=await Register.create(req.body);
        let token=generateToken(register);
        return res.status(200).send({register,token});
    } catch (error) {
        res.status(400).send({message:error.message});
    }
})

module.exports=router;