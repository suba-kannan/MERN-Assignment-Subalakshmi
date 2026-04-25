import mongoose from "mongoose";


const netflixSchema = new mongoose.Schema({
    userName:String,
    userEmail:String,
    userPassword:String,
    subType:String,
    mobile:Number,
    createdBy:{
        type:String,
        default:"Admin"
    },
    updatedBy:{
        type:String,
        default:"Admin"
    }

},{timestamps:true})


const netflixModel = mongoose.model("netflixUserData", netflixSchema);

export default netflixModel