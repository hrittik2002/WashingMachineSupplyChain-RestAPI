import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubProcessItemSchema = new Schema(
  {
    componentId : {
        type : Object,
        required : true,
    },
    componentName : {
        type : String,
        required : true,
    },
    componentDescription: {
        type : String,
        required : true,
    },
    unitOfMeasure : {
        type : String,
        required : true,
    },
    requiredQuantity: {
        type : Number,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const SubProcessItem = mongoose.model("SubProcessItem", SubProcessItemSchema);
export default SubProcessItem;