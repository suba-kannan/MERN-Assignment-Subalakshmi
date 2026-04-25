import userModel from "../model/userModel.js"

export const createUser = async(req,res)=>{

    try {
        const userData = req.body
        const newUser = await userModel.create(userData)
        res.status(201).json({msg:"User successfully created"})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})

        
    }


}