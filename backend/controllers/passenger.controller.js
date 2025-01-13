import PassengerModel from "../models/passenger.model.js";
import { comparePassword, hashPassword } from "../utility/passwordUtility.js";
import { generateToken } from "../utility/tokenUtility.js";

export const createPassenger = async (req, res) => {
    let { name, email,password } = req.body;
    const hashedPassword = await hashPassword(req.body.password);
    password = hashedPassword;
    try {
        const passenger = new PassengerModel({
            name,
            email,
            password
        });
        await passenger.save();

        const id = passenger._id;
        const token = generateToken(id); // function to generate token
        // res.cookie('token', token);

        res.status(201).json({message:"passenger created successfully.", token});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginPassenger = async (req, res) => {
    let { email,password } = req.body;
    
    try {
        const passenger = await PassengerModel.findOne({email}).select("+password");
        if(!passenger){
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await comparePassword(password,passenger.password);
        if(!isMatch){
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const id = passenger._id;
        const token = generateToken(id); // function to generate token
        res.cookie('token', token);

        res.status(200).json({message:"Login success", token});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

