import mongoose from "mongoose";
import {DB_NAME} from "../dbname.js";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Database Connection Error🟠🟠`);
        process.exit(1)
    }
}
export default connectDB