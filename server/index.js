// Importing the required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const socket = require('socket.io');

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
const messageRoutes = require('./routes/message');

// Adding the routes to the app
app.use('/api/v1', generalRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', chatRoutes);
app.use('/api/v1', messageRoutes);

// Connecting to the database
const db = require('./config/db');

// Starting the server for now on port 8000
const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Server started on port ${process.env.PORT || 8000}`);
});

const io = socket(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  },
});

// Store the online users
global.onlineUsers = new Map();

// Listens for new socket connections
io.on('connection', (socket) => {
  // Set the socket object globally as chatSocket
  global.chatSocket = socket;
  console.log('Socket connected');
  // Listen the 'add-user' event (online or logged in), for the user id and store the socket id
  socket.on('add-user', (userEmail) => {
    onlineUsers.set(userEmail, socket.id);
    console.log(global.onlineUsers);
  });

  // Listens the send-message event, for the message object and send the message to the receiver
  socket.on('send-message', (message) => {
    const sendUserSocket = onlineUsers.get(message.to);
    // If the user is online then send the message
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('receive-message', message.message);
    }
  });
});
