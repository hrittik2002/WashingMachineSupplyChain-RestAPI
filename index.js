import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import { router as Register } from './routes/Register/registerAdmin.js';
import { router as Login} from './routes/Login/login.js';
import { router as Department } from './routes/Department/department.js';
import { router as Item } from './routes/Item/Item.js';
import { router as Manufacturing} from './routes/Manufacturing/Manufacturing.js';  
import { router as Process } from './routes/Process/Process.js';
import { router as SubProcess } from './routes/SubProcess/SubProcess.js';
import { router as SubProcessItem } from './routes/SubProcessItem/SubProcessItem.js';
import { router as Fulfillment } from './routes/Fulfillment/Fullfillment.js';
import { router as HistoryData } from './routes/HistoryData/HistoryData.js';
import { router as SupplyPlanning } from './routes/SupplyPlanning/SupplyPlanning.js';
import { router as Bom } from './routes/Bom/Bom.js';

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
app.use('/api/manufacturing' , Manufacturing)
app.use('/api/process' , Process);
app.use('/api/subProcess' , SubProcess);
app.use('/api/subProcessItem' , SubProcessItem);
app.use('/api/fulfillment' , Fulfillment);
app.use('/api/HistoryData' , HistoryData);
app.use('/api/SupplyPlanning' , SupplyPlanning)
app.use('/api/bom' , Bom)

app.listen(PORT , ()=>{
    console.log("The backend server is running on " + PORT);
})
