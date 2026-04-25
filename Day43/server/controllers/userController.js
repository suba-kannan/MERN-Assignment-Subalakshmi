import userModel from "../model/userModel.js"

export const createUser = async(req,res)=>{

    try {
        const {name,email,age} = req.body

        if(!name || !email){
            res.status(400).json({msg:"Fill required columns"})
            return
        }

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            res.status(400).json({msg:"Email already exists"})
            return
        }

        const newUser = await userModel.create({name,email,age})
        res.status(201).json({msg:"User successfully created"})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
 
    }
}

export const getuser = async(req,res)=>{

    try {
        const user = await userModel.find()
        res.status(200).json({data:user})
        
    } catch (error) {

        console.log("Error",error);
        res.status(500).json({msg:"Error",error})
        
    }
    
}

// TASK 1: INSERT DATA

// 4. How will you validate required fields (name, email)?
// Defined in schema and manually checking it before creating

// 5. How will you handle duplicate email?
// Define email as unique and before inserting check if email already exists

// 6. How will you use try/catch in the controller?
// Used to handle runtime errors, prevents server crash and send proper error response

// 7. How will you send a proper success response after inserting data?
// status(201) and json with msg and data


// TASK 2: SHOW DATA

// 2. How will you use Mongoose find() method?
// model.find() - return a array of documents

// 3. How will you return total count of users?
// users.length or User.countDocuments()

// 4. How will you handle empty database (no users)?
// if (users.length === 0){
//      res.status(400).json({msg:"No user found"})
// }

// 5. How will you structure the response format?
// {
//   "success": true,
//   "message": "Users fetched successfully",
//   "total": 2,
//   "data": []
// }

// 6. How will you handle errors using try/catch?
// catch (error) {
//         console.log("Error",error);
//         res.status(500).json({msg:"Error",error})  
//     }

// 7. How will you test this API using Postman or Thunder Client?
// Method: GET
// URL: http://localhost:5000/api/user/get