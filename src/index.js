const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect.js');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

dbConnect();
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use('/api/auth', authRoutes); // Fixed the path
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running'); // Added a response to the root route
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
