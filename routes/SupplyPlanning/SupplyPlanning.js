import express from "express";
import { addNewSupplyPlanning, deleteSupplyPlanningById, getAllSupplyPlanning, getSupplyPlanningById, updateSupplyPlanningById } from "../../controllers/SupplyPlanning/SupplyPlanning.js";


const router = express.Router();

// get all sub process item
router.get("/getAll", getAllSupplyPlanning);
// get sub process item by id
router.get("/get/:id", getSupplyPlanningById);
// add new sub process item
router.post('/add' , addNewSupplyPlanning)
// upadate sub process item by id
router.put('/update/:id' , updateSupplyPlanningById)
// delete sub process item by id
router.delete('/delete:id' , deleteSupplyPlanningById)


export { router };
