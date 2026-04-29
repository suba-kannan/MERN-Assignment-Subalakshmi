import jwt from "jsonwebtoken"

export const authCheck = (req,res,next)=>{

  try {
    const token = req.headers.authorization

    if(!token){
      return res.status(401).json({msg:"No token provided"})
    }

    const checkToken = jwt.verify(token,process.env.JWT_SECRET)

    req.user = checkToken

    next()

  } catch (err) {

    console.log("Error",err);
    res.status(401).json({msg: "Invalid token" })
  }
}
