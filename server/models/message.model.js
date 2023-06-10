const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
  message: {
    text: {
      type: String,
      required: true,
    },
  },
  users: Array,
  sender: {
    type: Schema.Types.ObjectId, // references to the unique user id ---> _id
    ref: 'User', // references to the User model
    required: true,
  },
  timestamps: true, // automatically creates createdAt and updatedAt fields
});

const Message = model('Message', messageSchema);

module.exports = Message;
