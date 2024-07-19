const express = require('express');
const { addPreference, updatePreferenceHandler, getAllPreferencesHandler } = require('../controllers/preferenceController');

const router = express.Router();

router.post('/add', addPreference);
router.put('/update', updatePreferenceHandler);
router.get('/', getAllPreferencesHandler);

module.exports = router;
