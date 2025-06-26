// routes/auth.js

import express from 'express';
import User from '../models/User.js';
import Form from '../models/Form.js';

const router = express.Router();

// ✅ User Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Save new user
    const user = new User({ name, email, password });
    const savedUser = await user.save();

    res.status(201).json({
      message: 'User created',
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      error: 'Signup failed',
      details: err.message,
    });
  }
});

// ✅ Optional: Submit a habit (linked to Form.js)
router.post('/submit', async (req, res) => {
  const { userId, habit, date, completed } = req.body;

  if (!userId || !habit || !date) {
    return res.status(400).json({ error: 'userId, habit, and date are required' });
  }

  try {
    const form = new Form({ userId, habit, date, completed });
    const savedForm = await form.save();

    res.status(201).json({
      message: 'Habit submitted',
      form: savedForm,
    });
  } catch (err) {
    res.status(500).json({
      error: 'Form submission failed',
      details: err.message,
    });
  }
});

// ✅ Optional: Get all habits for a user
router.get('/habits/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const habits = await Form.find({ userId });
    res.status(200).json(habits);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch habits',
      details: err.message,
    });
  }
});

export default router;


