const User = require('../../../models/user.model');

const getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.json({ status: true, message: 'User', user });
  } catch (error) {
    res.json({ status: false, message: error.message, error });
  }
};

module.exports = getUser;
