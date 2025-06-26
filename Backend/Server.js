// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// ✅ Import Models (if used directly in this file or for clarity)
import User from './models/User.js';
import Form from './models/Form.js';

// ✅ Import Routes
import authRoutes from './routes/auth.js';

// Load environment variables from .env
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Needed to read JSON from request body

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use('/api', authRoutes);

// ✅ Root route for testing
app.get('/', (req, res) => {
  res.send('🚀 Habit Tracker Backend is Running');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
