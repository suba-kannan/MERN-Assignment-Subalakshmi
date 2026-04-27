import userModel from "../model/userModel.js"

export const validateUser = async(req,res,next)=>{


    const {name,email,password} = req.body
    const existingUser = await userModel.findOne({email})
    
    if(existingUser){
        res.status(400).json({msg:"Email already exists"})
        return
    }
    
    if(!name || !email || !password){
        res.status(400).json({msg:"Fill required columns"})
        return
    }

    if(password.length<5){
        res.status(400).json({msg:"Password should be atleast 10"})
        return

    }

    next()

}

// What is Middleware?
// Middleware is a function that runs between request and response in express.

// Why we use Middleware?
// We use middleware to handle common logic in one place instead of repeating it