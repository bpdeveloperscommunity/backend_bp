const mongoose = require('mongoose');

// Define the Testimonial schema
const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Testimonial model
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
