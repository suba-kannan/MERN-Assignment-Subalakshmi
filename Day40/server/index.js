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