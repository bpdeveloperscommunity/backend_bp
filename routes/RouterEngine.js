const express = require('express');
const router = express.Router();
const createController = require('../controllers/ControllerEngine');

const Company = require('../models/CompaniesModel');
const TrainingMode = require('../models/TrainingMode');
const Testimonial = require('../models/Testimonial');
const YoutubeVideos = require('../models/YoutubeVideosModel');
const AdwantagesModel = require('../models/AdwantagesModel');
const CoursesPage = require('../models/CoursesPageModel');
const RegisterModel = require('../models/RegisterModel')
const FaqModel = require('../models/FaqModel')
const HeroSectionModel = require('../models/HeroSectionModel')
const courseModel = require('../models/CoursesModel');
const PastEventsModel = require('../models/EventsModel');

// Define required fields for each model
const companyRequiredFields = ['name', 'image'];
const trainingModeRequiredFields = ['title', 'image', 'description'];
const testimonialRequiredFields = [ 'name', 'content', 'role', 'rating' ];
const youtubeVideosRequiredFields = [ 'url', 'title', 'description'];
const advantageRequiredFields = ['image', 'title', 'content'];
const coursePageRequiredFields = ['programmingLanguages', 'courseModules', 'courseDetails', 'batchStart', 'faq', 'courseVideo', 'salaryPackage'];
const userRegisterRequiredFields = ['name', 'email', 'mobile', 'course'];
const FaqRequiredFields = ['question', 'answer']
const HeroSectionRequiredFields = ['title', 'subtitle', 'image', 'backgroundImageLarge', 'backgroundImageSmall', 'backgroundColor']
const CourseRequiredFields = ['name', 'image', 'duration', 'trainingMode']
const PastEventsRequiredFields = ['image', 'title', 'tag',
'content', 'date', 'time']


// Create dynamic controllers for each model
const companyController = createController(Company, companyRequiredFields);
const trainingModeController = createController(TrainingMode, trainingModeRequiredFields);
const testimonialController = createController(Testimonial, testimonialRequiredFields);
const YoutubeVideosController = createController(YoutubeVideos, youtubeVideosRequiredFields);
const advantageController = createController(AdwantagesModel, advantageRequiredFields);
const coursePageController = createController(CoursesPage, coursePageRequiredFields);
const userRegisterController = createController(RegisterModel, userRegisterRequiredFields)
const FaqController = createController(FaqModel, FaqRequiredFields)
const HeroSectionController = createController(HeroSectionModel, HeroSectionRequiredFields)
const CourseController = createController(courseModel, CourseRequiredFields)
const PastEventsController = createController(PastEventsModel, PastEventsRequiredFields)

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

router.get('/coursePage', coursePageController.getAll);
router.post('/coursePage', coursePageController.create);
router.get('/coursePage/:id', coursePageController.getById);
router.put('/coursePage/:id', coursePageController.update);
router.delete('/coursePage/:id', coursePageController.remove);

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

router.get('/heroSection', HeroSectionController.getAll);
router.post('/heroSection/add', HeroSectionController.create);
router.get('/heroSection/:id', HeroSectionController.getById);
router.put('/heroSection/update/:id', HeroSectionController.update);
router.delete('/heroSection/delete/:id', HeroSectionController.remove);

router.get('/course', CourseController.getAll);
router.post('/course/add', CourseController.create);
router.get('/course/:id', CourseController.getById);
router.put('/course/update/:id', CourseController.update);
router.delete('/course/delete/:id', CourseController.remove);

router.get('/past-events', PastEventsController.getAll);
router.post('/past-events/add', PastEventsController.create);
router.get('/past-events/:id', PastEventsController.getById);
router.put('/past-events/update/:id', PastEventsController.update);
router.delete('/past-events/delete/:id', PastEventsController.remove);

module.exports = router;
