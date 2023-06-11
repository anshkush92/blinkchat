const Message = require('../../../models/message.model');

const getMessages = async (req, res) => {
  const { from, to } = req.body;
  console.log('from', from);
  console.log('to', to);

  try {
    // Get all values from messages collection where users array contains both from and to
    // and sort them by updatedAt in ascending order (oldest first)
    const messages = await Message.find({ users: { $all: [from, to] } }).sort({
      updatedAt: 1,
    });

    // Classifying messages as self and other
    const classifiedMessages = messages.map((message) => {
      return {
        message: message.message.text,
        self: message.sender.toString() === from.toString(),
      };
    });

    res.json({
      status: true,
      message: 'All messages',
      messages: classifiedMessages,
    });
  } catch (error) {
    res.json({ status: false, message: error.message, error });
  }
};

module.exports = getMessages;
