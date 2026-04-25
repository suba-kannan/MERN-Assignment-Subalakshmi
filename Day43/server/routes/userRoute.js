import express from 'express'
import { createUser, getuser } from "../controllers/userController.js";

const route = express.Router()

route.post('/create',createUser)
route.get("/get", getuser)

export default route


// http://localhost:5000/api/user/create
// http://localhost:5000/api/user/get