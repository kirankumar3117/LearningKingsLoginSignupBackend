const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
require("dotenv").config();

const registerSchema=new mongoose.Schema({

    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    termsAndConditions:{type:Boolean,required:true},
    list:{type:Object}
},
{
    versionKey:false,
    timestamps:true
}
)

registerSchema.pre("save",function(next){
    let salt=+process.env.SALT_ROUNDS;
    const hash = bcrypt.hashSync(this.password,salt);
    this.password=hash;
   return  next();

})

const Register=mongoose.model("register",registerSchema);

module.exports=Register;