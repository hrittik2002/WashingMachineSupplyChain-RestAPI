import express from "express";
import { addNewFulfillment, deleteFulfillmentById, getAllFulfillment, getFulfillmentById, updateFulfillmentById } from "../../controllers/Fulfillment/Fullfillment.js";

const router = express.Router();

// get all sub process item
router.get("/getAll", getAllFulfillment);
// get sub process item by id
router.get("/get/:id", getFulfillmentById);
// add new sub process item
router.post('/add' , addNewFulfillment)
// upadate sub process item by id
router.put('/update/:id' , updateFulfillmentById)
// delete sub process item by id
router.delete('/delete:id' , deleteFulfillmentById)


export { router };
