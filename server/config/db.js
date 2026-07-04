import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected',()=>console.log("database connected successfully "))
       console.log("MONGODB_URI =", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI)
    } catch(error){
        console.log("Error connecting to database",error.message)
    }
}

export default connectDB;
    