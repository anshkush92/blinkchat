const addMessage = async (req, res) => {
  try {
    // Logic to add message
    res.json({ status: true, message: 'Message added', message });
  } catch (error) {
    res.json({ status: false, message: error.message, error });
  }
};

module.exports = addMessage;
