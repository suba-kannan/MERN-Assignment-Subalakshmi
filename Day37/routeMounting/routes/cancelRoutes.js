import express from 'express'
import {cancelController} from '../controllers/cancelController.js'

const route = express.Router()

route.get("/order", cancelController);

export default route

// query: http://localhost:5000/api/cancel/order