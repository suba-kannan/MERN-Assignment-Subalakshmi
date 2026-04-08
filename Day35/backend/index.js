import http from 'http'
import dotenv from 'dotenv'
import { files } from './file.js'
import { filehandling } from './filehandling.js'

dotenv.config()

const app = http.createServer()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
    
})

files()
filehandling()