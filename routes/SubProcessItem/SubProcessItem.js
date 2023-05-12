import express from "express";
import { addNewSubProcessItem, deleteSubProcessItemById, getAllSubProcessItem, getSubProcessItemById, updateSubProcessItemById } from "../../controllers/SubProcessItem/SubProcessItem.js";

const router = express.Router();

// get all sub process item
router.get("/getAll", getAllSubProcessItem);
// get sub process item by id
router.get("/get/:id", getSubProcessItemById);
// add new sub process item
router.post('/add' , addNewSubProcessItem)
// upadate sub process item by id
router.put('/update/:id' , updateSubProcessItemById)
// delete sub process item by id
router.delete('/delete:id' , deleteSubProcessItemById)


export { router };
