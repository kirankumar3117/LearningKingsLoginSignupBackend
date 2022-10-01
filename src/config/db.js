const mongoose=require("mongoose");

require("dotenv").config();

const Id=process.env.MONGOOSE_USERNAME;
const Passward=process.env.MONGOOSE_PASSWARD


const connect=()=>{
    
    return (mongoose.connect(`mongodb+srv://${Id}:${Passward}@${process.env.MONGOOSE_DATABASE}`));
}

module.exports=connect;