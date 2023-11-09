const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const port = process.env.PORT || 3300;
const MONGO_URL = process.env.MONGO_URL
const routeEngine = require('./routes/RouterEngine');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: "AKIASULQMX62Y26NSJEH",
  secretAccessKey: "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",
  region: "us-east-2",
});

// Configure Multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

// Define a route for uploading images
app.post('aws/upload', upload.single('image'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file provided' });
  }

  const params = {
    Bucket: 'bepractical',
    Key: file.originalname,
    Body: file.buffer,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err);
      return res.status(500).json({ message: 'Failed to upload image' });
    }

    console.log('Image uploaded successfully:', data.Location);
    res.status(200).json({ message: 'Image uploaded successfully', imageUrl: data.Location });
  });
});


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
