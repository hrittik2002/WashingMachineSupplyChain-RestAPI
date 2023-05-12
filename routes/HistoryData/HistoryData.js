import express from "express";
import { addNewHistoryData, deleteHistoryDataById, getAllHistoryData, getHistoryDataById, updateHistoryDataById } from "../../controllers/HistoryData/HistoryData.js";


const router = express.Router();

// get all sub process item
router.get("/getAll", getAllHistoryData);
// get sub process item by id
router.get("/get/:id", getHistoryDataById);
// add new sub process item
router.post('/add' , addNewHistoryData)
// upadate sub process item by id
router.put('/update/:id' , updateHistoryDataById)
// delete sub process item by id
router.delete('/delete:id' , deleteHistoryDataById)


export { router };
