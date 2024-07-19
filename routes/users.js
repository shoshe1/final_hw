const express = require('express');
const { registerUser, getAllUsersHandler } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.get('/', getAllUsersHandler);

module.exports = router;
