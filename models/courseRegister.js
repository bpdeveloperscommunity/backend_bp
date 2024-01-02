const mongoose = require('mongoose');

// Define the Testimonial schema
const courseRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Testimonial model
const courseRegisterModal = mongoose.model('courseRegister', courseRegisterSchema);

module.exports = courseRegisterModal;
