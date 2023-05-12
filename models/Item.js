import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    unitOfMeasure:{
      type : String,
      required : true,
    },
    weight : {
      type : String,
      required : true
  },
    dimensions : {
        type : String,
        required : true
    },
    price : {
      type : Number,
      required : true
    },
    supplierId : {
      type : Object,
      required : true
    },
    leadTime : {
      type : Number,
      required : true
    },
    saftyStockLevel : {
      type : Number,
      required : true
    }
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemSchema);
export default Item;