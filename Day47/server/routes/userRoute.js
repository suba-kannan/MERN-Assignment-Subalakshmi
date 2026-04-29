import express from 'express'
import { getDashboard, login, register } from '../controller/userController.js'
import { authCheck } from '../middleware/userMiddleware.js'

const route = express.Router()

route.post('/register',register)
route.post('/login',login)
route.get('/dashboard',authCheck,getDashboard)


export default route


// http://localhost:5000/api/user/register
// http://localhost:5000/api/user/login
// http://localhost:5000/api/user/dashboard