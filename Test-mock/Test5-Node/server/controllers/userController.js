import userModel from "../model/userModel.js"

export const createUser= async(req,res)=>{
    try {
        const {name,email,age,role} = req.body

        if(!name || !email){
            res.status(400).json({msg:"Fill all column"})
            return
        }

        const user = await userModel.create({name,email,age,role})
        res.status(201).json({msg:"Successfully creatd"})

        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
        
    }
}

export const getUser = async(req,res)=>{
    try {
        const user = await userModel.find()
        res.status(200).json({data:user})

    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
        
    }
}

export const getUserById = async(req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            res.status(400).json({msg:"User not found"})
            return
        }

        const user = await userModel.findById(id)
        res.status(200).json({msg:"User found",data:user})
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
    }
}

export const updateUser = async(req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            res.status(400).json({msg:"User not found"})
            return
        }

        const user = await userModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({msg:"Updated"})
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params

        if(!id){
            res.status(400).json({msg:"User not found"})
            return
        }

        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json({msg:"User deleted"})
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
    }
}

export const filterUsers = async(req,res)=>{
    try {
        const user = await userModel.find({age:{$gt:20}}).sort({name:1})
        res.status(200).json({msg:"User above age 20",user})
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
    }
}