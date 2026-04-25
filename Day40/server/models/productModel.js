import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
  {
    productName: String,
    category: String,
    price: Number,
    stock: Number,
    createdBy:{
      type: String,
      default: "Admin",
    },
    updatedBy:{
      type: String,
      default:"Admin",
    }
  },
  {timestamps:true},
)

const productModel = mongoose.model("amazonProduct",productSchema)

export default productModel