// index.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const authRoutes = require('./routes/users/auth'); // Import the auth routes
const signupRoutes = require('./routes/users/signup'); // Import the auth routes
const logoutRoutes = require('./routes/users/logout'); // Import the auth routes

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the authentication routes
app.use('/api', authRoutes);
app.use('/api', signupRoutes);
app.use('/api', logoutRoutes);

// Connect to MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
