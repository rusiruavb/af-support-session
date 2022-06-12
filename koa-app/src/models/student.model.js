const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nic: { type: String, required: true },
  age: { type: Number, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "courses" },
});

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;
