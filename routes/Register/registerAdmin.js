import express from "express";
import { registerAdmin } from "../../controllers/Register/registerAdmin.js";

const router = express.Router();

// register admin 
router.post("/admin", registerAdmin);
// register sub admin 
router.post("/subAdmin", registerAdmin);

export { router };