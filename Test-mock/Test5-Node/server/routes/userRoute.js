import express from 'express'
import { createUser, getUser,filterUsers,getUserById,updateUser,deleteUser} from "../controllers/userController.js";

const route = express.Router()

route.post('/create',createUser)
route.get('/getuser',getUser)
route.get("/filter", filterUsers);
route.get('/:id',getUserById)
route.put('/:id',updateUser)
route.delete("/:id",deleteUser);


export default route;

// http://localhost:5000/api/users/create
// http://localhost:5000/api/users/getuser
// http://localhost:5000/api/users/:id
// http://localhost:5000/api/users/filter