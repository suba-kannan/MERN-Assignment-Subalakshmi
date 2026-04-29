import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register =async(req,res)=>{

     try {
       const {name,email,password} = req.body

       const hashPassword = await bcrypt.hash(password,10)

       const user = await userModel.create({name,email,password:hashPassword})

       res.status(201).json({ msg:"User Created",user})

     } catch (error) {

        console.log("Error",error);
       res.status(500).json({ msg:"Error",error });
     }


}

export const login =async(req,res)=>{

    try {
      const {email,password} = req.body

      const user = await userModel.findOne({email})
      if(!user){
        res.status(400).json({msg:"User not found"})
        return
      }

      const checkPass = await bcrypt.compare(password,user.password)
      if(!checkPass){
        res.status(400).json({msg:"Invalid password"})
        return
      }

      const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})

      res.status(200).json({msg:"Successfull login",token:token})

    } catch (error) {


      console.log("Error",error)
       res.status(500).json({ msg:"Error",error})
    }
    
}


export const getDashboard = async(req,res)=>{
  try {
    res.status(200).json({msg:"Go to dashboard",user:req.user})
    
  } catch (error) {
    console.log("Error",error)
       res.status(500).json({ msg:"Error",error})
    
  }
}