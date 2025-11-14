// Backend/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";


import enrollmentRoutes from "./routes/enrollmentRoutes.js";




dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: true })); // allow all origins (dev)
app.use(express.json());

// Base route
app.get("/", (req, res) => res.send("StudySync backend is running"));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);


app.use("/api/enroll", enrollmentRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
