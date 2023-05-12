import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubAdminSchema = new Schema(
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
    adminId : {
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

const SubAdmin = mongoose.model("SubAdmin", SubAdminSchema);
export default SubAdmin;