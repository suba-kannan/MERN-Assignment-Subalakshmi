import mongoose from "mongoose";

const connectionDB = async()=>{
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB successfully connected ${conn.connection.host}`);
        
        
    } catch (error) {

        console.log('Error',error)
        process.exit(0)
        
    }
}

export default connectionDB