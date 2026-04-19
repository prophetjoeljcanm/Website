const express = require('express');
const router = express.Router();
const Teaching = require('../models/Teaching');

// @route   GET api/teachings
// @desc    Get all teachings
router.get('/', async (req, res) => {
  try {
    const teachings = await Teaching.find().sort({ day: -1 });
    res.json(teachings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/teachings
// @desc    Create a teaching (Admin only)
router.post('/', async (req, res) => {
  const { title, day, category, duration, date, videoUrl, description } = req.body;

  try {
    const newTeaching = new Teaching({
      title, day, category, duration, date, videoUrl, description
    });

    const teaching = await newTeaching.save();
    res.json(teaching);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
