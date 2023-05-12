import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProcessSchema = new Schema(
  {
    orderId : {
        type : Object,
        required : true,
    },
    setupTime : {
        type : String,
        required : true,
    },
    runTime: {
        type : String,
        required : true,
    },
    resourceId : {
        type : Object,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const Process = mongoose.model("Process", ProcessSchema);
export default Process;