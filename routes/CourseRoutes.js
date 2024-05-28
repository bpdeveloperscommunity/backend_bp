// courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseController');

router.post('/allcourses', courseController.createCourse);
router.get('/allcourses/:id', courseController.getCourseById);
router.put('/allcourses/update/:id', courseController.updateCourse);
router.post('/allcourses/:courseId/faqs', courseController.addfaqToCourse);
router.post('/allcourses/:courseId/languages', courseController.addLanguagesToCourse);
router.post('/allcourses/:id/subcourses', courseController.addSubCourseToCourse);
router.put('/allcourses/:courseId/subcourses/:subCourseId', courseController.updateSubCourse);
router.delete('/allcourses/:courseId/subcourses/:subCourseId', courseController.deleteSubCourse);
router.get('/allcourses/:courseId/1/:subCourseId', courseController.getSubCourseById);
router.get('/allcourses', courseController.getAllCourses);


module.exports = router;
