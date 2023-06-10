const User = require('../../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    // Logic to get all users
    const users = await User.find({});
    res.json({ status: true, message: 'All users', users });
  } catch (error) {
    res.json({ status: false, message: error.message, error });
  }
};

module.exports = getAllUsers;
