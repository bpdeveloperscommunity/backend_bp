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

const faqSchema = new mongoose.Schema({
    question:{
      type:String,
      require:true
    },
    answer:{
      type:String,
      require:true
    }
})

// Define the main course schema
const courseSchema = new mongoose.Schema({
  course: {
    type:String,
    require:true
  },
  programmingLanguages: [programmingLanguagesSchema],
  courseModules: [courseModulesSchema],
  courseDetails: {
    instructor: {
      type:String,
      required:true
    },
    duration: {
      type:String,
      required:true
    },
    enrolled:{
      type:String,
      required:true
    },
    trainingMode:{
      type:String,
      required:true
    },
    course:{
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    }
  },
  batchStart: {
    type: String,
    required: true,
  },
  faq: [faqSchema],
  courseVideo: {
    type: String,
  },
  salaryPackage: 
    {
      minSalary: {
        type: String,
        required: true,
      },
      highestSalary: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
    },
});

const mernPageModel = mongoose.model('MernCourse', courseSchema);
const pythonPageModel = mongoose.model('PythonCourse', courseSchema);
const javaPageModel = mongoose.model('JavaCourse', courseSchema);

module.exports = {mernPageModel, pythonPageModel, javaPageModel }
