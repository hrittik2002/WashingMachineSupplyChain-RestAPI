import express from "express";
import { createDomData, deleteBomDataById, getAllBomData, getBomDataById, updateBomDataById } from "../../controllers/Bom/Bom.js";



const router = express.Router();

// get all sub process
router.get("/getAll", getAllBomData);
// get sub process by id
router.get("/get/:id", getBomDataById);
// add new sub process
router.post('/add' , createDomData)
// upadate sub process by id
router.put('/update/:id' , updateBomDataById)
// delete sub process by id
router.delete('/delete:id' , deleteBomDataById)


export { router };
