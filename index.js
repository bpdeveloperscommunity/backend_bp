const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const port = process.env.PORT || 3300;
const MONGO_URL = process.env.MONGO_URL
const routeEngine = require('./routes/RouterEngine');
const cors = require('cors');


// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Middleware for JSON and URL-encoded data
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(cors())

// Using the routes
app.use('/api', routeEngine);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
