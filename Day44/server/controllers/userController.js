import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'

export const createUser = async(req,res)=>{

    try {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            res.status(400).json({msg:"Fill required columns"})
            return
        }

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            res.status(400).json({msg:"Email already exists"})
            return
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await userModel.create({name,email,password:hashedPassword})
        res.status(201).json({msg:"User successfully created"})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
 
    }
}


// 1. How will you use async/await with try/catch in this process?
// You wrap your logic inside try and error inside catch
// Handles async errors cleanly and avoids unhandled promise rejections

// 2. How will you send a success response after creating the user?
// res.status(201).json({msg:"User successfully created"})

// 3. How will you handle validation errors from Mongoose?
// Mongoose throws errors like required field missing, invalid email format, dulicate key(unique)
// It will be handle inside catch

// 4. How will you structure error responses properly?
// {
//   "success": false,
//   "message": "Email already exists",
//   "error": "Duplicate email"
// }