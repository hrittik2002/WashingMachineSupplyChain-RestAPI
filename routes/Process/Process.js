import express from "express";
import { addProcessData, deleteProcess, getAllProcessData, getProcessById, updateProcessData } from "../../controllers/Process/Process.js";


const router = express.Router();

// get all process
router.get("/getAll", getAllProcessData);
// get process by id
router.get("/get/:id", getProcessById);
// add new process
router.post('/add' , addProcessData)
// upadate process by id
router.put('/update' , updateProcessData)
// delete process by id
router.delete('/delete:id' , deleteProcess)


export { router };
