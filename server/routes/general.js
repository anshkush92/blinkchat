const router = require('express').Router();

// Importing the required controllers

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server! API is up and running' });
});

router.get('/test', (req, res) => {
  res.json({ message: 'TEST router' });
});

router.get('/user', (req, res) => {
  res.json({ message: 'USER router' });
});

// Exporting the router
module.exports = router;
