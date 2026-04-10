import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cancelRoutes from './routes/cancelRoutes.js'
import updateRoutes from './routes/updateRoutes.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/api/auth",authRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/cancel",cancelRoutes)
app.use("/api/header",updateRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})