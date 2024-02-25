// courseController.js
const Course = require('../models/Course');

exports.createFaq = async (req, res) => {
  try {
    const { courseId, subCourseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    const subCourse = course.subCourses.id(subCourseId);
    if (!subCourse) {
      return res.status(404).json({ message: 'Sub-course not found' });
    }
    subCourse.faqs.push(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createLanguage = async (req, res) => {
    try {
      const { courseId, subCourseId } = req.params;
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      const subCourse = course.subCourses.id(subCourseId);
      if (!subCourse) {
        return res.status(404).json({ message: 'Sub-course not found' });
      }
      subCourse.languages.push(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// Implement updateFaq, deleteFaq, and getFaqById methods similarly
