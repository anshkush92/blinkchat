const mongoose = require('mongoose');

// Create a schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: '',
  },
});

// Create a model, saved as a collection called 'users' in the database
const User = mongoose.model('User', userSchema);

// Export the model - Can use 'users' collection by requiring this module
module.exports = User;
