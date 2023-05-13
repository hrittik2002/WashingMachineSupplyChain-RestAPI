import SupplyPlanning from "../../models/SupplyPlanning.js";

// get all sub processes
export const getAllSupplyPlanning = async(req , res) => {
    try {
        const supplyPlanning = await SupplyPlanning.find({});
        res.status(200).send(supplyPlanning);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// add new sub process
export const addNewSupplyPlanning = async(req , res) => {
    try {
        const supplyPlanning = new SupplyPlanning({
            forecastedDemand : req.body.forecastedDemand,
            actualDemand : req.body.actualDemand,
            avaiableInventory : req.body.avaiableInventory,
            reorderPoint : req.body.reorderPoint,
            leadTime : req.body.leadTime,
            orderQuantity : req.body.orderQuantity,
            orderDate : req.body.orderDate,
            receivedDate : req.body.receivedDate,
        });
        await supplyPlanning.save();
        res.status(200).send(supplyPlanning);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// get subProcess by id
export const getSupplyPlanningById = async(req , res) => {
    try {
        const supplyPlanning = await SupplyPlanning.findById(req.params.id);
        res.status(200).send(supplyPlanning);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// upadte subprocess
export const updateSupplyPlanningById = async(req , res) => {
    try {
        const supplyPlanning = await SupplyPlanning.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(supplyPlanning);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// delete subprocess
export const deleteSupplyPlanningById = async(req, res) => {
    try {
        const supplyPlanning = await SupplyPlanning.findByIdAndDelete(req.params.id);
        res.status(200).send(supplyPlanning);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}