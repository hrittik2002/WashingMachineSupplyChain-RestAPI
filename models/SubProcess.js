import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubProcessSchema = new Schema(
  {
    processId : {
        type : Object,
        required : true,
    },
    resourceId : {
        type : Object,
        required : true,
    },
    machineOrToolUsed : {
        type : String,
        required : true,
    },
    operatorName : {
        type : String,
        required : true,
    },
    operatorId : {
        type : Object,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const SubProcess = mongoose.model("SubProcess", SubProcessSchema);
export default SubProcess;
