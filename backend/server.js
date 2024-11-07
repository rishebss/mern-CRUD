import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js";

// Initialize environment variables
dotenv.config();

const app = express();
const PORT =process.env.PORT || 5000
// Middleware to parse JSON request bodies
app.use(express.json());

app.use("/api/products",productRoutes)

// Start the server and connect to the database
app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});



// R9zmrVXGng54TQvV