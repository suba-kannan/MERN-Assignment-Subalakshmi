import productModel from "../models/productModel.js"

export const createProduct= async(req,res)=>{

    try {
        const {productName,category,price,stock} = req.body
        console.log(`Products`,req.body);
        
        const createPro = await productModel.create({productName,category,price,stock})
        res.status(201).json({msg:"Successfully created"})

        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
         
    }

}

export const findData = async(req,res)=>{

    try {
        const userid = req.params
        const createPro = await productModel.find(userid)
        console.log("User ID:", req.params);
        
        res.status(200).json({msg:"User found"})
        
    } catch (error) {
        
        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
        
    }


}