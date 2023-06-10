const User = require('../../models/user.model');

const getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getUser;
