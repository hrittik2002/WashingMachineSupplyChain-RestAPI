import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    Name : {
        type : String,
        reqired : true,
    },
    email : {
        type : String,  
        reqired : true,
    },
    employId : {
        type : Object,
        reqired : true,
    },
    role : {
        type : String,
    },
    password : {
        type : String,
        reqired : true,
    },
    departmentId : {
        type : Object,
        reqired : true,
    },
    subAdminId : {
        type : Object,
        reqired : true,
    },
    type : {
        type : Number,
        reqired : true,
    }
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;