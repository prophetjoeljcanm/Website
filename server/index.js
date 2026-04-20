require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Vercel-Admin-atlas-charcoal-crystal:Pranab2026@atlas-charcoal-crystal.ecspmwz.mongodb.net/abieljoel?retryWrites=true&w=majority&appName=atlas-charcoal-crystal';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/teachings', require('./routes/teachings'));
app.use('/api/media', require('./routes/media'));
app.use('/api/inquiries', require('./routes/inquiries'));
app.use('/api/dashboard', require('./routes/dashboard'));

// Test Route
app.get('/', (req, res) => res.send('Ministry API Running'));

// DB Connection
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:');
    console.error(err.message);
  });

// Server Start (Only if not running in Vercel serverless environment)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 API Server running on port ${PORT}`);
    console.log(`🔗 Proxy target: http://localhost:${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;
