import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BomSchema = new Schema(
  {
    SKU : {
        type : Object,
        required : true,
    },
    componentName : {
        type : String,
        required : true,
    },
    componentDescription : {
        type : String,
        required : true,
    },
    unitOfMeasure : {
        type : String,
        required : true,
    },
    cost : {
        type : Number,
        required : true,
    },
    isDefault : {
        type : Boolean,
        required : true,
    },
    leadTime : {
        type : Number,
        required : true,
    },
    SupplierId : {
        type : Object,
        required : true,
    }
  },
  {
    timestamps: true,
  }
);

const Bom = mongoose.model("Bom", BomSchema);
export default Bom;