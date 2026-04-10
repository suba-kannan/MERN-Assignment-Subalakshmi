import express from 'express'
import { authController } from '../controllers/authController.js';


const route = express.Router()


route.get("/order/:orderId", authController);

export default route

// params: http://localhost:5000/api/orders/order/1