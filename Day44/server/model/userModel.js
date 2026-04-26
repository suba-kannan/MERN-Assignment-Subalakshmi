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
        lowercase:true,
        match:[
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email"
        ]
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


const userModel = mongoose.model("validationDatas", userSchema);

export default userModel