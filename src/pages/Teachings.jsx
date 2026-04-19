import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, BookOpen, Clock, ChevronRight, Loader2 } from 'lucide-react';
import PropheticBackground from '../components/PropheticBackground';
import apiService from '../services/api';

const Teachings = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [teachings, setTeachings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachings = async () => {
      try {
        const data = await apiService.getTeachings();
        setTeachings(data);
      } catch (err) {
        console.error('Error fetching teachings:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachings();
  }, []);

  const categories = ['All', 'Authority', 'Character', 'Kingdom Systems', 'Prayer & Obedience'];

  const filteredTeachings = activeCategory === 'All' 
    ? teachings 
    : teachings.filter(t => t.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Search & Filter Header */}
      <section className="relative py-24 overflow-hidden">
        <PropheticBackground />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-black mb-8 text-accent-charcoal">Prophetic <span className="text-primary">Teachings</span></h1>
          
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-charcoal/40 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search teachings..." 
                className="w-full bg-white border border-primary/20 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-primary transition-all text-accent-charcoal"
                id="teaching-search"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-accent-charcoal/60 hover:text-accent-charcoal border border-primary/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachings Grid/List */}
      <section className="py-20 container mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-accent-charcoal/60 font-bold uppercase tracking-widest text-sm">Loading Teachings...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachings.map((teaching, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glow-card rounded-2xl p-8 hover:-translate-y-2 transition-transform cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Day {teaching.day}
                </div>
                <div className="text-accent-charcoal/40 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {teaching.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-accent-charcoal group-hover:text-primary transition-colors">{teaching.title}</h3>
              
              <div className="flex items-center gap-4 text-accent-charcoal/60 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> {teaching.category}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {teaching.duration}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-primary/10">
                <span className="text-primary font-bold text-sm tracking-wide group-hover:underline">Watch Now</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      )}
        
        {/* Pagination/Load More */}
        <div className="mt-20 text-center">
          <button className="btn-outline px-12">Load More Teachings</button>
        </div>
      </section>
    </div>
  );
};

export default Teachings;
