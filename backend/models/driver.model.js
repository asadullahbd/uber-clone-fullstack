import mongoose from "mongoose";

const driverSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:3
        },
        
    },
    {timeStamps:true}
)