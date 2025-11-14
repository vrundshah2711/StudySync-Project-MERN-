import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  instructor: { type: String },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
