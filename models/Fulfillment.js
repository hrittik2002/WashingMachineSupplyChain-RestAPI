import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FulfillmentSchema = new Schema(
  {
    orderQuantity : {
        type : Number,
        required : true,
    },
    shippedQuantity : {
        type : Number,
        required : true,
    },
    shippingMethod: {
        type : String,
        required : true,
    },
    shippingDate : {
        type : Date,
        required : true,
    },
    trackingNumber: {
        type : String,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const Fulfillment = mongoose.model("Fulfillment", FulfillmentSchema);
export default Fulfillment;