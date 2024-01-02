import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully");
        console.log("MongoDB connection details:", connection);

        // ... (rest of your code)
    } catch (error) {
        console.error("Failed to connect to MongoDB");
        console.error(error);
    }
};
