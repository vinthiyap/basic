// routes/auth.js
import express from 'express';
import User from '../models/User.js';
import Form from '../models/Form.js';

const router = express.Router();

// User Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(400).json({ message: 'Signup failed', error: err.message });
  }
});

// Save Habit Entry
router.post('/submit', async (req, res) => {
  const { userId, habit, date, completed } = req.body;
  try {
    const form = new Form({ userId, habit, date, completed });
    await form.save();
    res.status(201).json({ message: 'Habit entry saved', form });
  } catch (err) {
    res.status(400).json({ message: 'Form submission failed', error: err.message });
  }
});

// Get Habit Entries for a User
router.get('/habits/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const habits = await Form.find({ userId });
    res.status(200).json(habits);
  } catch (err) {
    res.status(400).json({ message: 'Failed to fetch habits', error: err.message });
  }
});

export default router;
