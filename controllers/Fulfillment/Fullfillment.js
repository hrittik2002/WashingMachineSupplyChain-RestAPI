import Fulfillment from "../../models/Fulfillment.js";


// get all sub processes
export const getAllFulfillment = async(req , res) => {
    try {
        const fullfillment = await Fulfillment.find({});
        res.status(200).send(fullfillment);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// add new sub process
export const addNewFulfillment = async(req , res) => {
    try {
        const fullfillment = new Fulfillment({
            orderQuantity : req.body.orderQuantity,
            shippedQuantity : req.body.shippedQuantity,
            shippingMethod : req.body. shippingMethod,
            shippingDate : req.body.shippingDate,
            trackingNumber : req.body.trackingNumber
        });
        await fullfillment.save();
        res.status(200).send(fullfillment);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// get subProcess by id
export const getFulfillmentById = async(req , res) => {
    try {
        const fullfillment = await Fulfillment.findById(req.params.id);
        res.status(200).send(fullfillment);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// upadte subprocess
export const updateFulfillmentById = async(req , res) => {
    try {
        const fullfillment = await Fulfillment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(fullfillment);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// delete subprocess
export const deleteFulfillmentById = async(req, res) => {
    try {
        const fullfillment = await Fulfillment.findByIdAndDelete(req.params.id);
        res.status(200).send(fullfillment);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}