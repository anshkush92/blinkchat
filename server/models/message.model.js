const { model, Schema } = require('mongoose');

const messageSchema = new Schema(
  {
    message: {
      text: {
        type: String,
        required: true,
      },
    },
    users: Array,
    sender: {
      type: String, // references to the unique user id ---> _id
      ref: 'User', // references to the User model
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model('Message', messageSchema);

module.exports = Message;
