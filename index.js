import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import { router as Register } from './routes/Register/registerAdmin.js';
import { router as Login} from './routes/Login/login.js';
import { router as Department } from './routes/Department/department.js';
import { router as Item } from './routes/Item/Item.js';

// basic configuration
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(cors());
app.use(express.json());

// connect to mongoDB
connectDB()

// routes
app.use('/api/register' , Register);
app.use('/api/login', Login);
app.use('/api/department' , Department);
app.use('/api/item' , Item);


app.listen(PORT , ()=>{
    console.log("The backend server is running on " + PORT);
})
