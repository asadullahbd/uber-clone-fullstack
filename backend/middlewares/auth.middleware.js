import driverModel from "../models/driver.model.js";
import { verifyToken } from "../utility/tokenUtility.js";

export const authDriverMiddleware = async (req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Not authenticated"});
    }
    const decoded = verifyToken(token);
    try {
        const driver =  await driverModel.findById(decoded._id);
        if(!driver){
            return res.status(404).json({message:"Unauthorized"});
        }
        req.driver = driver;
        next();
    } catch (error) {
        console.error(error);   
    }

};