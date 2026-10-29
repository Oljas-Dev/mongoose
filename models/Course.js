import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: Date, required: true },
  students: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
