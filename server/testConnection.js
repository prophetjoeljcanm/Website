const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  try {
    console.log('Testing connection to:', process.env.MONGO_URI || 'mongodb://localhost:27017/abieljoel');
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/abieljoel', { serverSelectionTimeoutMS: 2000 });
    console.log('SUCCESS: Database is connected and working!');
    process.exit(0);
  } catch (err) {
    console.error('FAILURE: Could not connect to database.');
    console.error('Error Details:', err.message);
    process.exit(1);
  }
};

testConnection();
