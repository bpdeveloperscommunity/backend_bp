const mongoose = require('mongoose');

const ourCoursesModeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: String,
    required: true,
  },
  HighestCtc: {
    type: String,
    required: true,
  },

  BatchStarting: {
    type: String,
    required: true,
  },
  
  PageLink:{
    type:String,
    required:true
  },
  courePoints:{
    type:String,
    required:true
  },
  certification:{
    type:String,
    required:true
  },
  courseDescription:{
    type:String,
    required:true
  },
  
    salaryDescription:{
    type:String,
    required:true
  },

  courseFor:{
    type:String,
    required:true
  },

  designation:{
    type:String,
    required:true
  },

  courseBenifits:{
    type:String,
    required:true
  },
  instructor:{
    name:String,
    email:String,
  },

  faqs: [{
    question: String,
    answer: String,
}],
programmingLanguages:[
  {
    image:String,
    name:String
  }
],

  courses:[
    {
          CourseId:String,
          CourseName:String,
          CourseImage:String,
          courseDuration:String,
          BatchingStrating:String,
          courseDescription:String,
          CourseModules:[
            {
              title:String,
              topics:String
            }
          ]
    }
  ]
});

const OurCourse = mongoose.model('ourCourses', ourCoursesModeSchema);

module.exports = OurCourse;
