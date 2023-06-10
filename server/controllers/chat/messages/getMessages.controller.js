const getMessages = async (req, res) => {
  try {
    // Logic to get messages
    res.json({ status: true, message: 'All messages', messages });
  } catch (error) {
    res.json({ status: false, message: error.message, error });
  }
};

module.exports = getMessages;
