import driverModel from "../models/driver.model.js";
export const createDriverService = async (driverData) => {
    // save driver to db
    try {
        const driver = new driverModel(driverData);
        await driver.save();
        return driver;
    } catch (error) {
        return {error: error}
    }
};