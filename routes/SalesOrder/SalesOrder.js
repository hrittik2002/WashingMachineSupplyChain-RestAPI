import express from "express";
import { addNewSalesOrder, deleteSalesOrderById, getAllSalesOrder, getSalesOrderById, updateSalesOrderById } from "../../controllers/SalesOrder/SalesOrder.js";

const router = express.Router();


// get all sales order
router.get("/getAll", getAllSalesOrder);
// get sales order by id
router.get("/get/:id", getSalesOrderById);
// add new sales order
router.post('/add' , addNewSalesOrder)
// upadate sales order by id
router.put('/update' , updateSalesOrderById)
// delete sales order by id
router.delete('/delete:id' , deleteSalesOrderById)


export { router };
