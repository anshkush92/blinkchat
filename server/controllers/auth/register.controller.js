const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  res.json({ message: 'From submitted successfully', data: req.body });
};

module.exports = register;
