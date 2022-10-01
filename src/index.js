const express=require("express");

const app =express();

const cors=require("cors");

app.use(express.json());

app.use(cors());

const registerController=require("./controller/register.controller");

app.use("",registerController);





module.exports=app;


