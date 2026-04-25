import express from 'express'
import {createProduct,createDatas} from '../controllers/createController.js'

const route = express.Router()


route.post('/product',createProduct)
route.post("/userdatas", createDatas);


export default route;

// http://localhost:5000/api/create/createproduct
// http://localhost:5000/api/create/userdatas