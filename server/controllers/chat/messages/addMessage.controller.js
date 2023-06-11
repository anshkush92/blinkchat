const Message = require('../../../models/message.model');

const addMessage = async (req, res) => {
  const { from, to, message } = req.body;

  console.log(req.body);

  try {
    // Logic to add message
    const data = await Message.create({
      message: {
        text: message,
      },
      users: [from, to],
      sender: from,
    });

    if (data)
      return res.json({
        status: true,
        message: 'Message added successfully',
        data,
      });
    else
      return res.json({
        status: false,
        message: 'Message not added',
      });
  } catch (error) {
    res.json({ status: false, message: error.message, error });
  }
};

module.exports = addMessage;
