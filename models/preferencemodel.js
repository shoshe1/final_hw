const db = require('./db');

const createPreference = async (userId, startDate, endDate, destination, vacationType) => {
    const [rows] = await db.query('INSERT INTO preferences (user_id, start_date, end_date, destination, vacation_type) VALUES (?, ?, ?, ?, ?)', [userId, startDate, endDate, destination, vacationType]);
    return rows.insertId;
};

const getPreferencesByUserId = async (userId) => {
    const [rows] = await db.query('SELECT * FROM preferences WHERE user_id = ?', [userId]);
    return rows;
};

const updatePreference = async (id, startDate, endDate, destination, vacationType) => {
    await db.query('UPDATE preferences SET start_date = ?, end_date = ?, destination = ?, vacation_type = ? WHERE id = ?', [startDate, endDate, destination, vacationType, id]);
};

const getAllPreferences = async () => {
    const [rows] = await db.query('SELECT * FROM preferences');
    return rows;
};

module.exports = { createPreference, getPreferencesByUserId, updatePreference, getAllPreferences };
