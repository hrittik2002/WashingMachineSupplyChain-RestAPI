import express from "express";
import { LoginAdmin } from "../../controllers/Login/login.js";


const router = express.Router();

// login
router.post("/1", LoginAdmin);


export { router };
