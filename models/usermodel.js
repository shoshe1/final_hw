const db = require('./db');

const createUser = async (username, password, accessCode) => {
    const [rows] = await db.query('INSERT INTO users (username, password, access_code) VALUES (?, ?, ?)', [username, password, accessCode]);
    return rows.insertId;
};

const getUserByUsername = async (username) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

module.exports = { createUser, getUserByUsername, getUserById, getAllUsers };
