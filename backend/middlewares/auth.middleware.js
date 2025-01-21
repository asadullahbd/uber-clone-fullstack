import driverModel from "../models/driver.model.js";
import passengerModel from "../models/passenger.model.js";
import { verifyToken } from "../utility/tokenUtility.js";

export const authDriverMiddleware = async (req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Not authenticated"});
    }
    try {
        const decoded = verifyToken(token);
        const driver =  await driverModel.findById(decoded.id);
        if(!driver){
            return res.status(404).json({message:"Unauthorized"});
        }
        req.driver = driver;
        next();
    } catch (error) {
        console.error(error);   
    }

};

export const authPassengerMiddleware = async (req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Not authenticated"});
    }
    try {
        const decoded = verifyToken(token);
        const passenger =  await passengerModel.findById(decoded.id);
        if(!passenger){
            return res.status(404).json({message:"Unauthorized"});
        }
        req.passenger = passenger;
        next();
    } catch (error) {
        console.error(error);   
    }

};