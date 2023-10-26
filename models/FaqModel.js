const mongoose = require('mongoose')
const faqSchema = new mongoose.Schema({
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
  });
  
  // Create and export the FAQ model
  const FaqModel = mongoose.model('FAQ', faqSchema);
  
  module.exports = FaqModel;