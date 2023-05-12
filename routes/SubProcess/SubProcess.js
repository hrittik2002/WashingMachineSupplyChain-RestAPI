import express from "express";
import { addNewSubProcess, deleteSubProcessById, getAllSubProcess, getSubProcessById, updateSubProcessById } from "../../controllers/SubProcess/SubProcess.js";



const router = express.Router();

// get all sub process
router.get("/getAll", getAllSubProcess);
// get sub process by id
router.get("/get/:id", getSubProcessById);
// add new sub process
router.post('/add' , addNewSubProcess)
// upadate sub process by id
router.put('/update/:id' , updateSubProcessById)
// delete sub process by id
router.delete('/delete:id' , deleteSubProcessById)


export { router };
