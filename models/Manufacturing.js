import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ManufacturingSchema = new Schema(
  {
    SKU : {
        type : Object,
        required : true
    },
    startDate : {
        type : Date,
        required : true,
    },
    endDate : {
        type : Date,
        required : true,
    },
    productionQuantity:{
        type : Number,
        required : true,
    },
    productionCost : {
        type : Number,
        required : true,
    },
    scrapPercentage : {
        type : Number,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const Manufacturing = mongoose.model("Manufacturing", ManufacturingSchema);
export default Manufacturing;