const router = require('express').Router();

const addMessage = require('../controllers/chat/messages/addMessage.controller');
const getMessages = require('../controllers/chat/messages/getMessages.controller');

router.post('/messages/add', addMessage);
router.post('/messages', getMessages);

module.exports = router;
