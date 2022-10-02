
const app=require("./src/index");
require("dotenv").config();
const Port=process.env.port || 8080;
const connect=require("./src/config/db")
const mongoose=require("mongoose")


app.listen(Port,async()=>{
    try {

        mongoose.set('bufferCommands', false);

        await connect();

        console.log("connected to a port")
    } catch (error) {
        console.log({message:error.message})
    }
})