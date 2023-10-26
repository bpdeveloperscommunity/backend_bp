const mongoose = require('mongoose');

// Define the Course Schema
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseDuration: { type: String, required: true },
  enrolledStudents: { type: Number, default: 0 },
  modeOfTraining: { type: String, default: "Online and Offline" },
  courseVideo: { type: String, required: true },
  minSalary: { type: String, required: true },
  HighestSalary: { type: String, required: true },
  BatchStarting: { type: String, required: true },
  heroTitle: { type: String, required: true },
  heroSubtitle: { type: String, required: true },
  courseImage:{type:String, required:true},

  // References to related entities
  modules: [{
    title: String,
    topics: String,
}],

faqs: [{
    question: String,
    answer: String,
}],

instructors: [{
    enrolled: Number,
    name: String,
    email: String,
}],

programmingLanguages: [{
    image: String,
    name: String,
}],
});

// Create and export the Course model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
