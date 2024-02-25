const express = require('express');
const router = express.Router();
const createController = require('../controllers/ControllerEngine');

const Company = require('../models/CompaniesModel');
const TrainingMode = require('../models/TrainingMode');
const Testimonial = require('../models/Testimonial');
const YoutubeVideos = require('../models/YoutubeVideosModel');
const AdwantagesModel = require('../models/AdwantagesModel');
const RegisterModel = require('../models/RegisterModel')
const FaqModel = require('../models/FaqModel')
const HeroSectionModel = require('../models/HeroSectionModel')
const Course = require('../models/CoursesModel');
const EventsModel = require('../models/EventsModel');
const QuizModel = require('../models/QuizModal')
const BlogsModel = require('../models/BlogsModel')
const ourCourseModel = require('../models/OurCourse');
const heroimagesModal = require('../models/HeroImages');

// Define required fields for each model
const companyRequiredFields = ['name', 'image'];
const trainingModeRequiredFields = ['title', 'image', 'description'];
const testimonialRequiredFields = [ 'name', 'content', 'role', 'rating' ];
const youtubeVideosRequiredFields = [ 'url', 'title', 'description'];
const advantageRequiredFields = ['image', 'title', 'content'];
const userRegisterRequiredFields = ['name', 'email', 'phone', 'course'];
const FaqRequiredFields = ['question', 'answer']
const HeroImagesRequiredFields = ['about', 'image',]
const CourseRequiredFields = ['courseName', 'courseDuration', 'enrolledStudents', 'modeOfTraining', 'courseVideo', 'minSalary', 'HighestSalary', 'BatchStarting', 'heroTitle', 'heroSubtitle', 'modules', 'faqs', 'instructors', 'programmingLanguages',"courseImage", 'courseDescription', 'certification', 'courseFor', 'designation', 'salaryDescription', 'courseHeroPoints']
const EventsRequiredFields = ['image', 'title', 'tag',
'content', 'date', 'time', "eventType", "topic"]
const QuizRequiredFields = ['question', 'answers', 'correctAnswer']
const BlogsRequiredFields = ['title', 'subtitle', 'image', 'content']
const OurCourseRequiredFields = ['image', 'courseName', 'description', 'courseDuration', 'HighestCtc', 'BatchStarting', 'PageLink', 'courses', 'courePoints', 'certification', 'courseDescription', 'salaryDescription', 'courseFor', 'designation']



// Create dynamic controllers for each model
const companyController = createController(Company, companyRequiredFields);
const trainingModeController = createController(TrainingMode, trainingModeRequiredFields);
const testimonialController = createController(Testimonial, testimonialRequiredFields);
const YoutubeVideosController = createController(YoutubeVideos, youtubeVideosRequiredFields);
const advantageController = createController(AdwantagesModel, advantageRequiredFields);
const userRegisterController = createController(RegisterModel, userRegisterRequiredFields)
const FaqController = createController(FaqModel, FaqRequiredFields)
const HeroImagesController = createController(heroimagesModal, HeroImagesRequiredFields)
const CourseController = createController(Course, CourseRequiredFields)
const EventsController = createController(EventsModel, EventsRequiredFields)
const QuizController = createController(QuizModel, QuizRequiredFields)
const BlogController = createController(BlogsModel, BlogsRequiredFields)
const ourCoursesController = createController(ourCourseModel, OurCourseRequiredFields)

// Define routes for each model
router.get('/companies', companyController.getAll);
router.post('/companies', companyController.create);
router.get('/companies/:id', companyController.getById);
router.put('/companies/:id', companyController.update);
router.delete('/companies/:id', companyController.remove);

router.get('/trainingmodes', trainingModeController.getAll);
router.post('/trainingmodes', trainingModeController.create);
router.get('/trainingmodes/:id', trainingModeController.getById);
router.put('/trainingmodes/:id', trainingModeController.update);
router.delete('/trainingmodes/:id', trainingModeController.remove);

router.get('/testimonials', testimonialController.getAll);
router.post('/testimonials', testimonialController.create);
router.get('/testimonials/:id', testimonialController.getById);
router.put('/testimonials/:id', testimonialController.update);
router.delete('/testimonials/:id', testimonialController.remove);

router.get('/youtubeVideos', YoutubeVideosController.getAll);
router.post('/youtubeVideos', YoutubeVideosController.create);
router.get('/youtubeVideos/:id', YoutubeVideosController.getById);
router.put('/youtubeVideos/:id', YoutubeVideosController.update);
router.delete('/youtubeVideos/:id', YoutubeVideosController.remove);

router.get('/advantages', advantageController.getAll);
router.post('/advantages', advantageController.create);
router.get('/advantages/:id', advantageController.getById);
router.put('/advantages/:id', advantageController.update);
router.delete('/advantages/:id', advantageController.remove);


router.get('/users/all', userRegisterController.getAll);
router.post('/register', userRegisterController.create);
router.get('/user/:id', userRegisterController.getById);
router.put('/user/update/:id', userRegisterController.update);
router.delete('/user/delete/:id', userRegisterController.remove);

router.get('/faq', FaqController.getAll);
router.post('/faq/add', FaqController.create);
router.get('/faq/:id', FaqController.getById);
router.put('/faq/update/:id', FaqController.update);
router.delete('/faq/delete/:id', FaqController.remove);

router.get('/blogs', BlogController.getAll);
router.post('/blogs/add', BlogController.create);
router.get('/blogs/:id', BlogController.getById);
router.put('/blogs/update/:id', BlogController.update);
router.delete('/blogs/delete/:id', BlogController.remove);



router.get('/events', EventsController.getAll);
router.post('/events/add', EventsController.create);
router.get('/events/:id', EventsController.getById);
router.put('/events/update/:id', EventsController.update);
router.delete('/events/delete/:id', EventsController.remove);

router.get('/Quiz', QuizController.getAll);
router.post('/Quiz/add', QuizController.create);
router.get('/Quiz/:id', QuizController.getById);
router.put('/Quiz/update/:id', QuizController.update);
router.delete('/Quiz/delete/:id', QuizController.remove);

router.get('/heroImages', HeroImagesController.getAll);
router.post('/heroImages/add', HeroImagesController.create);
router.get('/heroImages/:id', HeroImagesController.getById);
router.put('/heroImages/update/:id', HeroImagesController.update);
router.delete('/heroImages/delete/:id', HeroImagesController.remove);

//courses
router.post('/courses', CourseController.create);
router.get('/courses', CourseController.getAll);
router.get('/course/:id', CourseController.getById);
router.put('/courses/:id', CourseController.update);
router.delete('/courses/:id', CourseController.remove);


router.get('/course/:courseId/faqs', async (req, res) => {
    const courseId = req.params.courseId;
    
    try {
      const course = await CourseModel.findById(courseId);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      
      res.json(course.faqs);
    } catch (error) {
      return res.status(404).json({error: error})
    }
  });

  //ourcourses
router.post('/ourCourses', ourCoursesController.create);
router.get('/ourCourses', ourCoursesController.getAll);
router.get('/ourCourses/:id', ourCoursesController.getById);
router.put('/ourCourses/:id', ourCoursesController.update);
router.delete('/ourCourses/:id', ourCoursesController.remove);


router.get('/ourCourses/:ourCoursesId/faqs', async (req, res) => {
  const ourCourseId = req.params.courseId;
  
  try {
    const ourCourse = await ourCourseModel.findById(ourCourseId);
    if (!ourCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    res.json(ourCourse.faqs);
  } catch (error) {
    return res.status(404).json({error: error})
  }
});

module.exports = router;