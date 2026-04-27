import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'

export const createUser = async(req,res)=>{

    try {
        const {name,email,password} = req.body

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await userModel.create({name,email,password:hashedPassword})
        res.status(201).json({msg:"User successfully created"})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
 
    }
}

