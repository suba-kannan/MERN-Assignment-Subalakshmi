import express from 'express'
import {createProduct,findData} from '../controllers/createController.js'

const route = express.Router()


route.post('/product',createProduct)
route.get("/userdatas/:userid", findData);


export default route;

// http://localhost:5000/api/create/product
// http://localhost:5000/api/create//userdatas/:userid