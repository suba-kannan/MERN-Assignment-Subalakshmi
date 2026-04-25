import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    createdBy:{
        type:String,
        default:"Admin"
    },
    updatedBy:{
        type:String,
        default:"Admin"
    }
},
{timestamps:true})


const userModel = mongoose.model("practiceDatas", userSchema);

export default userModel