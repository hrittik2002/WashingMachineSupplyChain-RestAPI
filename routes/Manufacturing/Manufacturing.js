import express from "express";
import { addManufacturingData, getAllManufacturingData, getManufacturingDataById } from "../../controllers/Manufacturing/Manufacturing.js";


const router = express.Router();

// get all data
router.get("/getAll", getAllManufacturingData);
// get data by id
router.get("/getById", getManufacturingDataById);
// add data
router.post("/addData", addManufacturingData);

export { router };
