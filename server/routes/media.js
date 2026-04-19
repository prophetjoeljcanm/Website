const express = require('express');
const router = express.Router();
const Media = require('../models/Media');

// @route   GET api/media
// @desc    Get all media items
router.get('/', async (req, res) => {
  try {
    const media = await Media.find().sort({ createdAt: -1 });
    res.json(media);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/media
// @desc    Create a media item (Admin only)
router.post('/', async (req, res) => {
  const { title, views, date, link, type } = req.body;

  try {
    const newMedia = new Media({
      title, views, date, link, type
    });

    const media = await newMedia.save();
    res.json(media);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
