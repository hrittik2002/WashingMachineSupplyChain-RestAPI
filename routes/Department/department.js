import express from "express";
import { createDepartment } from "../../controllers/Department/department.js";
import { verifyAdmin, verifyToken } from "../../middleware/verifyLogin.js";


const router = express.Router();

// create depatment
router.post("/create", verifyAdmin , createDepartment);


export { router };