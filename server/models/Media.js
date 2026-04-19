const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  views: { type: String, default: '0' },
  date: { type: String, required: true },
  link: { type: String, required: true },
  type: { type: String, enum: ['reel', 'video', 'post'], default: 'reel' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Media', mediaSchema);
