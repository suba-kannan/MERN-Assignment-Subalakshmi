import express from 'express'
import { createUser } from "../controllers/userController.js";
import { validateUser } from '../middleware/authMiddleware.js';

const route = express.Router()

route.post("/create", validateUser,createUser);

export default route


// http://localhost:5000/api/user/create
