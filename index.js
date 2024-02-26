// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const cors = require('cors')
// const port = process.env.PORT || 5300;
// const routeEngine = require('./routes/RouterEngine');
// const multer = require('multer');
// const AWS = require('aws-sdk');
// const courseRoutes = require('./routes/CourseRoutes');
// const subcourseRoutes = require('./routes/subCourseRoute');

// const courseRegisterModal = require('./models/courseRegister')
// // Using the routes
// app.use(cors())
// app.use('/api', routeEngine);
// app.use('/api', courseRoutes);
// app.use('/api', subcourseRoutes)

// const { registerUser, sendBrochure } = require('./templates/emailTemplates');

// const { sendEmail } = require('./Required/mailer');

// // Middleware for JSON and URL-encoded data
// app.use(express.json()); // Parse JSON requests
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
// // const allowedOrigins = [
// //   'https://testbepractical.com',
// // 'http://localhost:3000',
// // 'https://be-practical-blond.vercel.app'
// // ];

// // app.use(
// //   cors({
// //     origin: function (origin, callback) {
// //       // Check if the origin is in the allowedOrigins array
// //       if (allowedOrigins.includes(origin) || !origin) {
// //         callback(null, true);
// //       } else {
// //         callback(new Error('Not allowed by CORS'));
// //       }
// //     },
// //     credentials: true,
// //   })
// // );

// // Configure AWS S3
// const s3 = new AWS.S3({
//   accessKeyId: "AKIASULQMX62Y26NSJEH",
//   secretAccessKey: "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",
//   region: "us-east-2",
// });

// // Configure Multer for file uploads
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
// });

// // Define a route for uploading images
// app.post('/aws/upload', upload.single('image'), (req, res) => {
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file provided' });
//   }

//   const params = {
//     Bucket: 'bepractical',
//     Key: file.originalname,
//     Body: file.buffer,
//   };

//   s3.upload(params, (err, data) => {
//     if (err) {
//       console.error('Error uploading to S3:', err);
//       return res.status(500).json({ message: 'Failed to upload image' });
//     }

//     console.log('Image uploaded successfully:', data.Location);
//     res.status(200).json({ message: 'Image uploaded successfully', imageUrl: data.Location });
//   });
// });
// app.get('/aws/images', async (req, res) => {
//   const params = {
//     Bucket: 'bepractical', // Replace with your S3 bucket name
//   };

//   // Use the S3 SDK to list objects in the bucket
//   s3.listObjectsV2(params, (err, data) => {
//     if (err) {
//       console.error('Error listing objects in S3:', err);
//       return res.status(500).json({ message: 'Failed to fetch images from S3' });
//     }

//     // Extract image URLs from the S3 response
//     const images = data.Contents.map((object) => {
//       return {
//         image: object.Key,
//         // You can include additional information if needed
//       };
//     });

//     res.status(200).json(images);
//   });
// });

// // ...

// // Define a route for deleting an image by its filename
// app.delete('/aws/delete/:filename', async (req, res) => {
//   const filename = req.params.filename;

//   // Specify the S3 object to delete
//   const params = {
//     Bucket: 'bepractical', // Replace with your S3 bucket name
//     Key: filename,
//   };

//   // Use the S3 SDK to delete the object from the bucket
//   s3.deleteObject(params, async (err, data) => {
//     if (err) {
//       console.error('Error deleting object from S3:', err);
//       return res.status(500).json({ message: 'Failed to delete image from S3' });
//     }

//     // If the S3 deletion is successful, also remove the entry from MongoDB
//     try {
//       const deletedEntity = await ImageStoreModel.findOneAndDelete({ image: filename });
//       if (!deletedEntity) {
//         return res.status(404).json({ message: 'Image not found in MongoDB' });
//       }

//       res.status(200).json({ message: 'Image deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting image from MongoDB:', error);
//       res.status(500).json({ message: 'Failed to delete image from MongoDB' });
//     }
//   });
// });

// // ...
// app.post('/course/register', async (req, res) => {
//   try {
//     const { name, email, phone, course, downloadLink } = req.body;

//     // Save user data to MongoDB
//     const user = new courseRegisterModal({ name, email, phone, course });
//     await user.save();


//     // Send registration email
//     const registrationEmail = registerUser(name, email, downloadLink);
//     await sendEmail(email, 'Registration Successful', registrationEmail);

//     res.status(200).send('Registration successful. Brochure download link sent to your email.');
//   } catch (error) {
//     console.error('Error during registration', error);
//     res.status(500).send('Error during registration');
//   }
// });




// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//   console.log('Connected to MongoDB database');
// });





// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3200;
const routeEngine = require('./routes/RouterEngine');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');
const courseRegisterModal = require('./models/courseRegister')
const { registerUser, sendBrochure } = require('./templates/emailTemplates');
const { sendEmail } = require('./required/mailer');


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

// Configuring AWS S3
const s3 = new AWS.S3({
  accessKeyId: "AKIASULQMX62Y26NSJEH",
  secretAccessKey: "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",
  region: "us-east-2",
});

// Configuring Multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Defining a route for uploading images
app.post('/aws/upload', upload.single('image'), (req, res) => {
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
app.get('/aws/images', async (req, res) => {
  const params = {
    Bucket: 'bepractical', 
  };

  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.error('Error listing objects in S3:', err);
      return res.status(500).json({ message: 'Failed to fetch images from S3' });
    }

 
    const images = data.Contents.map((object) => {
      return {
        image: object.Key,
       
      };
    });

    res.status(200).json(images);
  });
});

// ...

// Define a route for deleting an image by its filename
app.delete('/aws/delete/:filename', async (req, res) => {
  const filename = req.params.filename;

  // Specify the S3 object to delete
  const params = {
    Bucket: 'bepractical', // Replace with your S3 bucket name
    Key: filename,
  };

  // Use the S3 SDK to delete the object from the bucket
  s3.deleteObject(params, async (err, data) => {
    if (err) {
      console.error('Error deleting object from S3:', err);
      return res.status(500).json({ message: 'Failed to delete image from S3' });
    }

    // If the S3 deletion is successful, also remove the entry from MongoDB
    try {
      const deletedEntity = await ImageStoreModel.findOneAndDelete({ image: filename });
      if (!deletedEntity) {
        return res.status(404).json({ message: 'Image not found in MongoDB' });
      }

      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Error deleting image from MongoDB:', error);
      res.status(500).json({ message: 'Failed to delete image from MongoDB' });
    }
  });
});

// ...
app.post('/course/register', async (req, res) => {
  try {
    const { name, email, phone, course, downloadLink } = req.body;

    // Save user data to MongoDB
    const user = new courseRegisterModal({ name, email, phone, course });
    await user.save();


    // Send registration email
    const registrationEmail = registerUser(name, email, downloadLink);
    await sendEmail(email, 'Registration Successful', registrationEmail);

    res.status(200).send('Registration successful. Brochure download link sent to your email.');
  } catch (error) {
    console.error('Error during registration', error);
    res.status(500).send('Error during registration');
  }
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



// Using the routes
app.use('/api', routeEngine);
app.use('/api', require('./routes/CourseRoutes'))


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
