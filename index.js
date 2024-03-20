const express = require('express');
require("dotenv").config();
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and x-www-form-urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API routes
app.use('/search', searchRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });