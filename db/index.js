import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async()=>{
        try {
             const connectionInstace =   await mongoose.connect(`${process.env.MONGODB_URI}`)
             console.log(`\n MongoDB connected !! DB Host : ${connectionInstace.connection.host}`)   
        } catch (error) {
              console.log("Mongodb connection error")
              process.exit(1)  
        }
}

export default connectDB