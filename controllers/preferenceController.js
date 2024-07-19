const { createPreference, getPreferencesByUserId, updatePreference, getAllPreferences } = require('../models/preferencemodel');

const addPreference = async (req, res) => {
    const { userId, startDate, endDate, destination, vacationType } = req.body;
    await createPreference(userId, startDate, endDate, destination, vacationType);
    res.status(201).send('Preference added successfully');
};

const updatePreferenceHandler = async (req, res) => {
    const { id, startDate, endDate, destination, vacationType } = req.body;
    await updatePreference(id, startDate, endDate, destination, vacationType);
    res.status(200).send('Preference updated successfully');
};

const getAllPreferencesHandler = async (req, res) => {
    const preferences = await getAllPreferences();
    res.json(preferences);
};

module.exports = { addPreference, updatePreferenceHandler, getAllPreferencesHandler };
