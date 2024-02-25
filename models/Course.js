// course.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: String,
    answer: String
  });
  const languagesSchema = new mongoose.Schema({
    image: String,
    name: String
  });

const subCourseSchema = new mongoose.Schema({
  tag:String,
  courseName: String,
  courseImage:String,
  heroSubtitle:String,
  coursePoints:String,
  BrocherLink:String,
  courseDescription:String,
  certification:String,
  courseFor:String,
  modules:[{
    title:String,
    description:String
  }],
  Benifits:String,
  Designation:String,
  AnnualSalary:String,
  faqs: [faqSchema],
  programmingLanguages: [languagesSchema],
  seo:{
    title:String,
    description:String,
    keywords:String,
    Tag_H1:String,
    canonical_url:String
  },
  details:{
    Instructor:String,
    Duration:String,
    admisionStart:String
  }
});

const courseSchema = new mongoose.Schema({
  tag:String,
  courseName: String,
  courseImage:String,
  heroSubtitle:String,
  coursePoints:String,
  BrocherLink:String,
  courseDescription:String,
  certification:String,
  courseFor:String,
  subCourses: [subCourseSchema], // Array of sub-courses
  Benifits:String,
  Designation:String,
  AnnualSalary:String,
  faqs: [faqSchema],
  programmingLanguages: [languagesSchema],
  seo:{
    title:String,
    description:String,
    keywords:String,
    Tag_H1:String,
    canonical_url:String
  },
  details:{
    Instructor:String,
    Duration:String,
    admisionStart:String
  }
});

module.exports = mongoose.model('AllCourse', courseSchema);