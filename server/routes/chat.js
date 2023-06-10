const router = require('express').Router();

const getAllUsers = require('../controllers/chat/allUsers.controller');
const getUser = require('../controllers/chat/user.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);

module.exports = router;
