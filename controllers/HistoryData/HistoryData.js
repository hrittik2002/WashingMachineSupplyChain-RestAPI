import HistoryData from "../../models/historyData.js";


// get all sub processes
export const getAllHistoryData = async(req , res) => {
    try {
        const historyOrder = await HistoryData.find({});
        res.status(200).send(historyOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// add new sub process
export const addNewHistoryData = async(req , res) => {
    try {
        const historyOrder = new HistoryData({
            orderStatus : req.data.orderStatus,
        });
        await salesOrder.save();
        res.status(200).send(historyOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// get subProcess by id
export const getHistoryDataById = async(req , res) => {
    try {
        const historyOrder = await HistoryData.findById(req.params.id);
        res.status(200).send(historyOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// upadte subprocess
export const updateHistoryDataById = async(req , res) => {
    try {
        const historyOrder = await HistoryData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(historyOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}

// delete subprocess
export const deleteHistoryDataById = async(req, res) => {
    try {
        const historyOrder = await HistoryData.findByIdAndDelete(req.params.id);
        res.status(200).send(historyOrder);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}