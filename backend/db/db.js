import mongoose from "mongoose";   

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`MongoDB connected`);
        })
        .catch((error) => {
            console.log(`disconnected MongoDB`);
            console.log(error);
        });
};

export default connectDB;