import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "E_waste",

        });
        console.log("db connected");

        console.log(connection);
    } catch (error) {
        console.log("failed to connect the database");
        console.log(error);
    }
};

// import mongoose from "mongoose";

// export const connectDb = async () => {
//     try {
//         const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
//             dbName: "E_waste",
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//         });
        

//         console.log("MongoDB connected successfully");
//         console.log("MongoDB connection details:", connection);

//         // Optionally, add event listeners for connection events
//         connection.on("error", (err) => {
//             console.error("MongoDB connection error:", err);
//         });

//         connection.on("disconnected", () => {
//             console.warn("MongoDB disconnected");
//         });

//         // You might also want to handle other connection events (e.g., connected, disconnected, etc.)

//     } catch (error) {
//         console.error("Failed to connect to MongoDB");
//         console.error(error);
//     }
// };