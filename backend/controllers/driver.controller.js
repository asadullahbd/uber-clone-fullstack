import { createDriverService } from "../services/driver.service.js";
import { comparePassword, hashPassword } from "../utility/passwordUtility.js";
import { generateToken } from "../utility/tokenUtility.js";
import driverModel from "../models/driver.model.js";

export const createDriverController = async (req, res) => {
    try {
        let { name, email, password, status, vehicle } = req.body;

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({
                    message: "name , email , password fields are required",
                });
        }
        if (
            !vehicle,
            !vehicle.color ||
            !vehicle.plate ||
            !vehicle.capacity ||
            !vehicle.vehicleType
        ) {
            return res
                .status(400)
                .json({ message: "vehicle fields are required" });
        }
        const hashedPassword = await hashPassword(req.body.password);
        const isDuplicate = await driverModel.findOne({email});
        if (isDuplicate) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const driver = await createDriverService({
            name,
            email,
            password:hashedPassword,
            status,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType,
            },
        });
        const token = generateToken(driver._id);
        res.status(201).json({message:"user created successfully.",token});
    } catch (error) {
        res.status(400).json({error: error});
    }
};

export const loginDriverController = async (req, res) => {
    try {
        let { email, password, } = req.body;

        if ( !email || !password) {
            return res
                .status(400)
                .json({
                    message: " email , password fields are required",
                });
        }

        const driver = await driverModel.findOne({email}).select("+password");

        if (!driver) {
            return res.status(400).json({ message: "invalid email or password" });
        }
        
        const isValidPassword = await comparePassword(password,driver.password);

        if (!isValidPassword) {
            return res.status(400).json({ message: "invalid email or password" });
        }
        
        const token = generateToken(driver._id);
        // res.cookie('token', token, {
        //     httpOnly: true, // Prevents JavaScript from accessing the cookie
        //     secure: true,   // Ensures cookie is only sent over HTTPS
        //     sameSite: 'strict', // Strict cross-site access policy
        //     maxAge: 60 * 60 * 1000, // 1 hour
        // });
        res.status(200).json({message:"login successful.",token});
    } catch (error) {
        res.status(400).json({error: error});
    }
};

export const profileDriverController = (req,res)=>{
    res.status(200).json({driver:req.driver});
};