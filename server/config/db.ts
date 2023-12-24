import { Color } from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: 'server/.env' });
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`MongoDB Connected: ${conn.connection.host}`)
}
export default connectDB