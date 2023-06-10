const bcrypt = require('bcrypt');
const User = require('../../models/user.model');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if username or email already exists
    const user = await User.findOne({ $or: [{ username: email }, { email }] });

    if (user) {
      // Check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.json({
          status: false,
          message: 'Incorrect Password',
        });
      } else {
        return res.json({
          status: true,
          message: 'Successfully logged in',
          data: req.body,
        });
      }
    } else {
      return res.json({
        status: false,
        message: 'User Not Found',
      });
    }
  } catch (error) {
    return res.json({ status: false, message: 'Some error occured', error });
  }
};

module.exports = login;
