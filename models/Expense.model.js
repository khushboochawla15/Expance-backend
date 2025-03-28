import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["Income", "Expense"], required: true },
 
},
{timestamps: true});


const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
