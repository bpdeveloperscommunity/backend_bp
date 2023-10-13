const mongoose = require('mongoose');

// Define a schema for programming languages
const programmingLanguagesSchema = new mongoose.Schema({
  image: String,
  name: String, // Beginner, Intermediate, Advanced, etc.
});

// Define a schema for course modules
const courseModulesSchema = new mongoose.Schema({
  title: String,
  about: String,
  topics: String
});

// Define a schema for instructors
const courseDetailSchema = new mongoose.Schema({
  instructor: String,
  duration: String,
  enrolled:Number,
  traningMode:String
});

// Define the main course schema
const courseSchema = new mongoose.Schema({
  title: String,
  programmingLanguages: [programmingLanguagesSchema],
  courseModules: [courseModulesSchema],
  coursedetails: [courseDetailSchema],
});

module.exports = mongoose.model('Course', courseSchema);