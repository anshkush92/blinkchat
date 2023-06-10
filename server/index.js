// Importing the required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
require('dotenv').config();

// Adding the required middlewares

// Morgan is used for logging the requests in the terminal
app.use(morgan('dev'));

// Helmet is used for adding the security headers
app.use(helmet());

// Cors is used for allowing the cross origin requests
app.use(cors());

// Body parser is used for parsing the request body
app.use(express.json());

// Importing the routes
const generalRoutes = require('./routes/general');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

// Adding the routes to the app
app.use('/api/v1', generalRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', chatRoutes);

// Connecting to the database
const db = require('./config/db');

// Starting the server for now on port 8000
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server started on port ${process.env.PORT || 8000}`);
});
