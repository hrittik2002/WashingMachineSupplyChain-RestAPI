import mongoose from "mongoose";

const Schema = mongoose.Schema;

const superAdminSchema = new Schema(
  {
    name : {
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
    type : {
        type : Number,
        reqired : true,
    }
  },
  {
    timestamps: true,
  }
);

const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);
export default SuperAdmin;