import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema(
  {
    departmentName : {
        type : String,
        reqired : true,
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model("Department", DepartmentSchema);
export default Department;