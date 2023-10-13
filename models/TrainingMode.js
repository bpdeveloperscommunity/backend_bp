const mongoose = require('mongoose');

const trainingModeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TrainingMode = mongoose.model('TrainingMode', trainingModeSchema);

module.exports = TrainingMode;
