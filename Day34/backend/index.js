import http from 'http'

import dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT || 5000


const app = http.createServer()

app.listen(PORT,()=>{
    console.log(`Server successfully running on http://localhost:${PORT} `);
    
}

)