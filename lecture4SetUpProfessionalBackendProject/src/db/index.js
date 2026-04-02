import mongoose from "mongoose";
import {dataBaseName} from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${dataBaseName}`);
        console.log(`/n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB;