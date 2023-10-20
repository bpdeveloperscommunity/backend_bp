const mongoose = require('mongoose');

// Define the Course Schema
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseDuration: { type: String, required: true },
  enrolledStudents: { type: Number, default: 0 },
  modeOfTraining: { type: String, default:"Online and Offline" },
  courseVideo: { type: String, required: true },
  minSalary: { type: String, required: true },
  HighestSalary: { type: String, required: true },
  BatchStarting: { type: String, required: true },
  courseVideo: { type: String, required: true },
  heroTitle: { type: String, required: true },
  heroSubtitle: { type: String, required: true },

  // References to related entities
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  faqs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FAQ' }],
  instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }],
  programmingLanguages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProgrammingLanguage' }],
});

// Create and export the Course model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
