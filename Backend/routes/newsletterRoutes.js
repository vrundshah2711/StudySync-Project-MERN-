// Backend/routes/newsletterRoutes.js
import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    const exists = await Subscriber.findOne({ email });
    if (exists) return res.status(200).json({ success: true, message: "Already subscribed" });

    const sub = await Subscriber.create({ email });
    res.status(201).json({ success: true, message: "Subscribed", data: sub });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
