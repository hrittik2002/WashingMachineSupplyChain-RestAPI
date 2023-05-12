import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SupplyPlanningSchema = new Schema(
  {
    forecastedDemand : {
        type : Number,
        required : true,
    },
    actualDemand : {
        type : Number,
        required : true,
    },
    avaiableInventory: {
        type : Number,
        required : true,
    },
    reorderPoint : {
        type : Number,
        required : true,
    },
    leadTime : {
        type : Date,
        required : true,
    },
    orderQuantity : {
        type : Number,
        required : true,
    },
    orderDate : {
        type : Date,
        required : true,
    },
    receivedDate : {
        type : Date,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const SupplyPlanning = mongoose.model("SupplyPlanning", SupplyPlanningSchema);
export default SupplyPlanning;