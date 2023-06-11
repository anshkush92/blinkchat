const router = require('express').Router();

const getAllUsers = require('../controllers/chat/users/allUsers.controller');
const getUser = require('../controllers/chat/users/user.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);

module.exports = router;
