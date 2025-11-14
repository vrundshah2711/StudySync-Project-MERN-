// Backend/routes/enrollmentRoutes.js
import express from "express";
import Enrollment from "../models/Enrollment.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Enroll in a course
router.post("/", verifyToken, async (req, res) => {
  try {
    const { courseTitle } = req.body;
    if (!courseTitle)
      return res.status(400).json({ success: false, message: "Course title required" });

    // Prevent duplicate enrollments
    const exists = await Enrollment.findOne({ userId: req.user.id, courseTitle });
    if (exists)
      return res.status(200).json({ success: true, message: "Already enrolled" });

    const enroll = await Enrollment.create({ userId: req.user.id, courseTitle });
    res.status(201).json({ success: true, message: "Enrolled successfully!", data: enroll });
  } catch (err) {
    console.error("Enroll error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Get user’s enrollments
router.get("/", verifyToken, async (req, res) => {
  try {
    const data = await Enrollment.find({ userId: req.user.id });
    res.json({ success: true, data });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
