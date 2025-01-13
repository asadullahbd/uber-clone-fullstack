import mongoose from "mongoose";    

const driverSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:3
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password : {
            type:String,
            required:true,
            minlength:6,
            select:false
        },
        status:{
            type:String,
            enum:['active', 'inactive'],
            default: "inactive"
        },
        vehicle:{
            color:{
                type:String,
                required:true,
                minlength:[3,"Color must be atleast 3 characters long"]
            },
            plate :{
                type:String,
                required:true,
                minlength:[3,"Plate must be atleast 3 characters long"]
            },
            capacity:{
                type:Number,
                required:true,
                min:[1,"Capacity must be greater than 0"]
            },
            vehicleType:{
                type:String,
                required:true,
                enum:['car', 'bike', 'cng']
            },
        }
        
    },
    { timestamps: true }
);


const Driver = mongoose.model('drivers',driverSchema);

export default Driver;