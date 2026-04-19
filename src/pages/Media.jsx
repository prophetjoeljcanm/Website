import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, Youtube, Share2, Heart, Loader2 } from 'lucide-react';
import PropheticBackground from '../components/PropheticBackground';
import apiService from '../services/api';

const Media = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const data = await apiService.getMedia();
        setReels(data.filter(item => item.type === 'reel'));
      } catch (err) {
        console.error('Error fetching media:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Media Header */}
      <section className="relative py-32 text-center container mx-auto px-6 overflow-hidden rounded-b-[4rem]">
        <PropheticBackground />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-accent-charcoal">Prophetic <span className="text-primary text-glow-light">Media</span></h1>
          <p className="text-xl text-accent-charcoal/60 max-w-2xl mx-auto">
            Experience the power through visual teachings, ministry highlights, and short prophetic insights.
          </p>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-accent-charcoal">
            <Instagram className="text-primary w-6 h-6" /> Recent Reels
          </h2>
          <button className="text-primary font-bold hover:underline">View on Instagram</button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-accent-charcoal/60 font-bold uppercase tracking-widest text-sm">Loading Media...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, i) => (
            <motion.a
              key={i}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-primary/20 bg-secondary/30 block"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <h3 className="font-bold text-sm mb-1 text-white">{reel.title}</h3>
                <div className="flex items-center justify-between text-[10px] text-white/80 uppercase tracking-widest">
                  <span>{reel.views} views</span>
                  <span>{reel.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
      </section>

      {/* YouTube / Long Form Section (Hidden per user request) */}

      {/* Social CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-8 text-accent-charcoal">Follow for Daily Insights</h2>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/prophetabieljoel/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
            <Instagram className="w-5 h-5" /> Instagram
          </a>
          <a href="#" className="btn-outline border-2 flex items-center gap-2">
            <Youtube className="w-5 h-5" /> YouTube
          </a>
        </div>
      </section>
    </div>
  );
};

export default Media;
