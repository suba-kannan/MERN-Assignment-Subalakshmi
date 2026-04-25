import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import createRoute from "./routes/createRoute.js"


dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/create',createRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server connected successfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/create

// What is Schema?

// Schema in mongoose defines the structure of documents within a mongoDB collection. 
// It acts as a blueprint that specifies what fields require, default values and validation rules.


// what is model?

// Model in mongoose is a wrapper build using a schema that allow it to interact with the mongoDb collection.
// It provides methods like create, find, update and delete.
// Models acts like an interface between your application and the database.


// what is find()?

// find() is a method used to get data from a mongoDB collection.
// All documents -no condition
// Matching documents - with condition


// what are all the model based methods?

// Model based methods are functions provided by mongoose to perform CRUD operations.
// create() - used to add new documents
// find() - get all or matching documents
// findById() - get by id
// findByIdAndUpdate() - get by id abd update that data
// findOneAndUpdate() - get by id and remove it