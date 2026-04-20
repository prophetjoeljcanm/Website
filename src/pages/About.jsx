import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Eye, Globe } from 'lucide-react';
import PropheticBackground from '../components/PropheticBackground';

const About = () => {
  const visionImage = "/Images/new.png";

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <PropheticBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase mb-4"
          >
            The Calling
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-12 text-accent-charcoal"
          >
            Prophet <span className="text-primary">Abiel Joel</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-accent-charcoal">A Life Surrendered to the Spirit</h2>
            <p className="text-accent-charcoal/70 leading-relaxed mb-6">
              Called at a young age to be a voice of restoration and authority, Prophet Abiel Joel has dedicated his life to the manifestation of the Kingdom of God on earth. With a focus on the deep things of the Spirit and the practical application of Kingdom Systems, he has become a mentor to thousands.
            </p>
            <p className="text-accent-charcoal/70 leading-relaxed">
              Through JCANM (Jesus Christ Anointing Nations Ministry), the message of the prophetic, character, and obedience is reaching the ends of the earth, raising a generation that doesn't just hear about power, but walks in it.
            </p>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 glow-card">
              <img src={visionImage} alt="Prophetic Vision" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 rounded-2xl bg-white border border-primary/10 flex flex-col items-center text-center shadow-sm">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-accent-charcoal">Our Vision</h3>
              <p className="text-accent-charcoal/60">To see the Glory of God cover the earth as the waters cover the sea through a global move of the Spirit.</p>
            </div>
            <div className="p-10 rounded-2xl bg-white border border-primary/10 flex flex-col items-center text-center shadow-sm">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-accent-charcoal">Our Mission</h3>
              <p className="text-accent-charcoal/60">Equipping saints for the work of the ministry, building character, and establishing Kingdom authority in every sphere of life.</p>
            </div>
            <div className="p-10 rounded-2xl bg-white border border-primary/10 flex flex-col items-center text-center shadow-sm">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-accent-charcoal">Our Values</h3>
              <p className="text-accent-charcoal/60">Authority, Character, Kingdom Systems, Prayer, and Absolute Obedience to the Holy Spirit.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
      </section>

      {/* Global Movement */}
      <section className="py-24 container mx-auto px-6 text-center">
        <Globe className="w-16 h-16 text-primary mx-auto mb-8 animate-float" />
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-accent-charcoal">The Global Glory Movement</h2>
        <p className="text-accent-charcoal/60 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          This is more than a ministry; it's a movement. From virtual classes to global crusades, we are witnessing the transformation of nations. We believe in the power of the prophetic word to shift destinies and the power of the Spirit to heal the broken.
        </p>
        <button className="btn-primary">Connect with the Movement</button>
      </section>
    </div>
  );
};

export default About;
