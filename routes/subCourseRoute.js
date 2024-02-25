// courseRoutes.js
const express = require('express');
const router = express.Router();
const subcourseController = require('../controllers/subCourse');

router.post('/courses/:courseId/subcourses/:subCourseId/faqs', subcourseController.createFaq);
router.post('/courses/:courseId/subcourses/:subCourseId/languages', subcourseController.createLanguage);

module.exports = router;
