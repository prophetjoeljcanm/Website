require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Teaching = require('./models/Teaching');
const Media = require('./models/Media');

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/abieljoel');
    
    // 1. Seed Admin
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const admin = new User({
        name: 'Prophet Admin',
        email: 'admin@abieljoel.org',
        password: 'ProphetAdmin2024!', 
        role: 'admin'
      });
      await admin.save();
      console.log('Admin account created.');
    } else {
      console.log('Admin account already exists.');
    }

    // 2. Seed Teachings
    const teachingsCount = await Teaching.countDocuments();
    if (teachingsCount === 0) {
      const teachingsData = [
        { day: 1, title: "The Foundation of Authority", category: "Authority", duration: "45 mins", date: "Jan 1, 2024" },
        { day: 2, title: "Divine Protocols", category: "Kingdom Systems", duration: "52 mins", date: "Jan 2, 2024" },
        { day: 3, title: "The Character of a Prophet", category: "Character", duration: "38 mins", date: "Jan 3, 2024" },
        { day: 4, title: "Deep Intercession", category: "Prayer & Obedience", duration: "60 mins", date: "Jan 4, 2024" },
        { day: 5, title: "Walking in Obedience", category: "Prayer & Obedience", duration: "42 mins", date: "Jan 5, 2024" },
        { day: 6, title: "Spheres of Influence", category: "Kingdom Systems", duration: "55 mins", date: "Jan 6, 2024" },
        { day: 7, title: "Spiritual discernment", category: "Authority", duration: "48 mins", date: "Jan 7, 2024" },
        { day: 165, title: "The Global Mandate", category: "Kingdom Systems", duration: "75 mins", date: "Jun 15, 2024" }
      ];
      await Teaching.insertMany(teachingsData);
      console.log('Teachings seeded.');
    }

    // 3. Seed Media
    const mediaCount = await Media.countDocuments();
    if (mediaCount === 0) {
      const mediaData = [
        { title: "Day 164: Spiritual Warfare", views: "142k", date: "Yesterday", link: "https://www.instagram.com/reel/DRLV5i3CGaJ/", type: 'reel' },
        { title: "Day 158: Carrying the Glory", views: "98k", date: "3 days ago", link: "https://www.instagram.com/reel/DRIzRxHCHi-/", type: 'reel' },
        { title: "Day 147: Divine Provision", views: "215k", date: "1 week ago", link: "https://www.instagram.com/reel/DRGbMDxiJ3a/", type: 'reel' },
        { title: "Day 132: Kingdom Keys", views: "167k", date: "2 weeks ago", link: "https://www.instagram.com/reel/DRDnZWACIVR/", type: 'reel' }
      ];
      await Media.insertMany(mediaData);
      console.log('Media seeded.');
    }

    console.log('Database Seeding Completed Successfully.');
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();
