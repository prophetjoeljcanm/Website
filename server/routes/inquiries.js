const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// @route   POST api/inquiries
// @desc    Submit a new prayer request, testimony, or class registration
router.post('/', async (req, res) => {
  const { name, email, phone, country, location, message, type } = req.body;

  try {
    const newInquiry = new Inquiry({
      name, email, phone, country, location, message, type
    });

    const inquiry = await newInquiry.save();
    res.json({ success: true, inquiry });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/inquiries
// @desc    Get all inquiries (Admin only)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
