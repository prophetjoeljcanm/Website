const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Teaching = require('../models/Teaching');
const Media = require('../models/Media');
const Inquiry = require('../models/Inquiry');

// @route   GET api/dashboard/stats
// @desc    Get dashboard statistics
router.get('/stats', async (req, res) => {
  try {
    const totalMembers = await User.countDocuments({ role: 'user' });
    const totalTeachings = await Teaching.countDocuments();
    const totalMedia = await Media.countDocuments();
    const totalInquiries = await Inquiry.countDocuments();
    const pendingInquiries = await Inquiry.countDocuments({ status: 'pending' });

    res.json({
      totalMembers,
      totalTeachings,
      totalMedia,
      totalInquiries,
      pendingInquiries
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/dashboard/inquiries
// @desc    Get recent inquiries
router.get('/inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(10);
    res.json(inquiries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PATCH api/dashboard/inquiries/:id
// @desc    Update inquiry status
router.patch('/inquiries/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.json(inquiry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/dashboard/inquiries/:id
// @desc    Delete an inquiry
router.delete('/inquiries/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Inquiry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
