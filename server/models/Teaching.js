const mongoose = require('mongoose');

const teachingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  day: { type: Number, required: true },
  category: { type: String, required: true },
  duration: { type: String, required: true },
  date: { type: String, required: true }, // Keeping as string to match existing frontend data
  videoUrl: { type: String, default: '#' },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Teaching', teachingSchema);
