import SalesOrder from "../../models/SalesOrder.js";


// get all sub processes
export const getAllSalesOrder = async(req , res) => {
    try {
        const salesOrder = await SalesOrder.find({});
        res.status(200).send(salesOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// add new sub process
export const addNewSalesOrder = async(req , res) => {
    try {
        const salesOrder = new SalesOrder({
            orderStatus : req.data.orderStatus,

        });
        await salesOrder.save();
        res.status(200).send(salesOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// get subProcess by id
export const getSalesOrderById = async(req , res) => {
    try {
        const salesOrder = await SalesOrder.findById(req.params.id);
        res.status(200).send(salesOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// upadte subprocess
export const updateSalesOrderById = async(req , res) => {
    try {
        const salesOrder = await SalesOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(salesOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// delete subprocess
export const deleteSalesOrderById = async(req, res) => {
    try {
        const salesOrder = await SalesOrder.findByIdAndDelete(req.params.id);
        res.status(200).send(salesOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}