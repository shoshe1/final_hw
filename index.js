const express = require('express');
const userRoutes = require('./routes/users');
const preferenceRoutes = require('./routes/preferences');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/preferences', preferenceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
