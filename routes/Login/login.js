import express from "express";
import { LoginAdmin, LoginEmployee, LoginSubAdmin } from "../../controllers/Login/login.js";


const router = express.Router();

// login admin
router.post("/1", LoginAdmin);
// login subadmin
router.post("/2", LoginSubAdmin);
// login employee
router.post("/3", LoginEmployee);

export { router };
