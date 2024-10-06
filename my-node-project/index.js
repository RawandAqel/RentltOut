// index.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
// Users
const authRoutes = require('./routes/users/auth'); 
const signupRoutes = require('./routes/users/signup'); 
const logoutRoutes = require('./routes/users/logout'); 
// Items
const get_all_itemsRoutes = require('./routes/items/get_all_items'); 
const items_filterRoutes = require('./routes/items/items_filter'); 

const app = express();

// Middleware to parse JSON
app.use(express.json());

//Users
app.use('/api', authRoutes);
app.use('/api', signupRoutes);
app.use('/api', logoutRoutes);
// Items
app.use('/api', get_all_itemsRoutes);
app.use('/api', items_filterRoutes);

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
