import mongoose from "mongoose";

const passengerSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:[3, "Name must be at least 3 characters long"]
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[6, "Email must be at least 6 characters long"]
        },
        password:{
            type:String,
            required:true,
            minlength:[6, "Password must be at least 6 characters long"],
            select:false
        }
    }
)

const Passenger = mongoose.model("Passenger", passengerSchema);

export default Passenger;