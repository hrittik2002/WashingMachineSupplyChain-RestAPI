import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SalesOrderSchema = new Schema(
  {
    orderStatus : {
        type : String,
        required : true,
    },
    salesRepName : {
        type : String,
        required : true,
    },
    salesRepId: {
        type : Object,
        required : true,
    },
    shippingAddress : {
        type : String,
        required : true,
    },
    billingAddress: {
        type : String,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const SalesOrder = mongoose.model("SalesOrder", SalesOrderSchema);
export default SalesOrder;