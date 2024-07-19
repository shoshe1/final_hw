const { createUser, getUserByUsername, getAllUsers } = require('../models/usermodel');
const crypto = require('crypto');

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
        return res.status(400).send('Username already exists');
    }

    const accessCode = crypto.randomBytes(16).toString('hex');
    await createUser(username, password, accessCode);
    res.status(201).send('User registered successfully');
};

const getAllUsersHandler = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
};

module.exports = { registerUser, getAllUsersHandler };
