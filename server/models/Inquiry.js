const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  country: { type: String },
  location: { type: String }, // For prayer requests
  message: { type: String }, // For prayer requests / testimonies
  type: { 
    type: String, 
    enum: ['prayer', 'testimony', 'class_registration', 'prophetic_class_registration'], 
    required: true 
  },
  status: { type: String, enum: ['pending', 'reviewed', 'contacted'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
