const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseFee: { type: Number, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: "students" }],
});

const Course = mongoose.model("courses", CourseSchema);

module.exports = Course;
