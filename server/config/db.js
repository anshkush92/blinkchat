const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Getting the connection object
const connection = mongoose.connection;

// Adding the event listeners
connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

connection.on('error', (err) => {
  console.log('MongoDB connection error', err);
});

connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Exporting the connection
module.exports = connection;
