// courseController.js
const Course = require('../models/Course');

exports.getSubCourseById = async (req, res) => {
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
    res.json(subCourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({courses:courses});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.updateSubCourse = async (req, res) => {
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
    Object.assign(subCourse, req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  const courseId = req.params.id;
  const updateData = req.body; // Assuming updateData contains the fields to update
  
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData);
    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSubCourse = async (req, res) => {
  try {
    const { courseId, subCourseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Log the course object to see its structure
    console.log(course);

    // Check if subCourses is an array
    if (!Array.isArray(course.subCourses)) {
      return res.status(400).json({ message: 'SubCourses is not an array' });
    }

    // Find the index of the subCourse to remove
    const indexToRemove = course.subCourses.findIndex(subCourse => subCourse._id.toString() === subCourseId);
    if (indexToRemove === -1) {
      return res.status(404).json({ message: 'SubCourse not found' });
    }

    // Remove the subCourse from the array
    course.subCourses.splice(indexToRemove, 1);

    // Save the updated course
    await course.save();

    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};



exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addSubCourseToCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    // Push the sub-course to the subCourses array of the main course
    course.subCourses.push(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.addfaqToCourse = async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      // Push the sub-course to the subCourses array of the main course
      course.faqs.push(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  exports.addLanguagesToCourse = async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      // Push the sub-course to the subCourses array of the main course
      course.languages.push(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
