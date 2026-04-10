import express from 'express'
import { updateController } from '../controllers/updateController.js';

const route = express.Router()

route.post("/update", updateController);


export default route

// header: http://localhost:5000/api/header/update