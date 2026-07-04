import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const employeeSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,ref:"User",required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["ADMIN","EMPLOYEE"],default:'EMPLOYEE'},},{timestamps:true}
);
const Employee=mongoose.models.Employee || mongoose.model("Employee",employeeSchema);

export default Employee;