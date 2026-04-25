import mongoose from "mongoose"


const userSchema = new mongoose.Schema({

    name:String,
    mobile:Number,
    email:String,
    skills:[String],
    newData:{
        name:String,
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


const userModel = mongoose.model("userDatas", userSchema);

export default userModel