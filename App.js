import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongoDBConnection.js";
import expenseRoutes from "./routes/Expense_routes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ CORS Middleware (Default settings)
app.use(cors());

// ✅ Connect DB
connectDB();

// ✅ Routes
app.use("/expenses", expenseRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
