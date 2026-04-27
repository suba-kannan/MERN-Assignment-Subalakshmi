import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
      type: String,
      required:true
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


const userModel = mongoose.model("middlewareCheck", userSchema);

export default userModel