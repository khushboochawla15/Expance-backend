import express from "express";
import expenseController from "../controllers/ExpenseController.js";

const Expenserouter = express.Router();

Expenserouter.route("/")
.get( expenseController.getExpenses)
.post( expenseController.addExpense);
Expenserouter.route("/:id")
.delete( expenseController.deleteExpense)
.put(expenseController.updateExpense);

export default Expenserouter;

