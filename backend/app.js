import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./db/db.js";
import driverRoutes from './routes/driver.routes.js';
import passengerRoutes from './routes/passenger.routes.js';

const app = express();

// database connect 
connectDB();


// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

// routes 
app.use("/driver",driverRoutes);   
app.use("/passenger",passengerRoutes);   


export default app;
