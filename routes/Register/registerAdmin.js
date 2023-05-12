import express from "express";
import { registerAdmin, registerEmployee, registerSubAdmin } from "../../controllers/Register/registerAdmin.js";

const router = express.Router();

// register admin 
router.post("/admin", registerAdmin);
// register sub admin 
router.post("/subadmin", registerSubAdmin);
// register employee
router.post("/employee", registerEmployee);

export { router };