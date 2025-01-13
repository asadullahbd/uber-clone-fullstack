import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
export const verifyToken = (token) => {
    try {
        return jwt.verify( token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error(error);
    }
};

