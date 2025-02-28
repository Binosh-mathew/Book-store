import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    
})
const User=mongoose.model("user",UserSchema);

export default User;