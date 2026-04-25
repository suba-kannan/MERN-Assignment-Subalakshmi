import productModel from "../models/productModel.js"
import netflixModel from "../models/netflixModel.js"

export const createProduct= async(req,res)=>{

    try {
        const {productName,category,price,stock} = req.body
        const createPro = await productModel.create({productName,category,price,stock})
        res.status(201).json({msg:"Successfully created"})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
         
    }

}

export const createDatas = async(req,res)=>{

    try {
        const {userName,userEmail,userPassword,subType,mobile} = req.body
        const createDatas = await netflixModel.create({userName,userEmail,userPassword,subType,mobile})
        res.status(201).json({msg:"Successfully created"})
        
    } catch (error) {
        
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
        
    }


}