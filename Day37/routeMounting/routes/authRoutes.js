import express from 'express'
import { authController } from '../controllers/authController.js'

const route = express.Router()


route.post("/login",authController)

export default route

// body: http://localhost:5000/api/auth/login