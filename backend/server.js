// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // Use dotenv directly
const userRoutes = require('./routes/userRoutes');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong!' }); // Send a generic error response
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
