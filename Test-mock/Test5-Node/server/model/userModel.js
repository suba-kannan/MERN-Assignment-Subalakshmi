import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    age:{
        type:Number,
        min:18
    },
    isActive:{
        type:Boolean,
        default: true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    createdBy:{
        type:String,
        default:"Admin",
    },
    updatedBy:{
        type:String,
        default:"Admin",
    }
    
},{timestamps:true})

const userModel = mongoose.model("testDatas", userSchema);

export default userModel;