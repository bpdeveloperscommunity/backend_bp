// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/patientTokenDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  token: String
});
const Patient = mongoose.model('Patient', patientSchema);

// Routes
app.post('/book', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validate input data
    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Please provide name, email, and phone." });
    }

    // Generate a token
    const token = generateToken();

    // Create a new patient
    const newPatient = new Patient({ name, email, phone, token });
    await newPatient.save();

    return res.status(201).json({ token });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Token generation function (basic example)
function generateToken() {
  // Logic to generate a token
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
