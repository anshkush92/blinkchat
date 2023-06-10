const User = require('../../models/user.model');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      return res.json({
        status: false,
        message: 'Username or email already exists',
        data: req.body,
      });
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      // Save the user to the database
      await newUser.save();
    }
    res.json({
      status: true,
      message: 'User Registered successfully',
      data: req.body,
    });
  } catch (error) {
    return res.json({ status: false, message: 'Some error occured', error });
  }
};

module.exports = register;
