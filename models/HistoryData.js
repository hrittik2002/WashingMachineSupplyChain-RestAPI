import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HistoryDataSchema = new Schema(
  {
    orderStatus : {
        type : String,
        required : true,
    },
    statusDate : {
        type : Date,
        required : true,
    },
    commentsOrNotes: {
        type : String,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const HistoryData = mongoose.model("HistoryData", HistoryDataSchema);
export default HistoryData;