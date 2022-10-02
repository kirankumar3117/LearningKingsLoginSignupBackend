
const app=require("./src/index");
require("dotenv").config();
const Port=process.env.port || 8080;
const connect=require("./src/config/db")
const mongoose=require("mongoose")


app.listen(Port,async()=>{
    try {
        await connect();
        mongoose.set('bufferCommands', false);
        console.log("connected to a port")
    } catch (error) {
        console.log({message:error.message})
    }
})