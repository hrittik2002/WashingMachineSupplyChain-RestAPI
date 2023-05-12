import express from "express";
import { getAllItems, postItem } from "../../controllers/Item/Item.js";


const router = express.Router();

// get items data
router.get("/viewAll", getAllItems);
// post items data
router.post("/add", postItem);


export { router };
