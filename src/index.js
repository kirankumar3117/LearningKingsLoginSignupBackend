const express=require("express");

const app =express();

app.use(express.json());

const registerController=require("./controller/register.controller");

app.use("",registerController);





module.exports=app;


