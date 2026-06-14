import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, Sparkles, Search, ExternalLink, Calendar, Headphones, Volume2, Compass } from 'lucide-react';
import PropheticBackground from '../components/PropheticBackground';

const AudioSeries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Unlocked', 'Locked'

  // Generate 100 days of data
  const daysData = [
    {
      day: 1,
      title: "Biblical Things to Do Every Morning That Can Strengthen Your Faith",
      date: "June 14, 2026",
      poster: "/Images/day_1_poster.jpg",
      link: "https://whatsapp.com/channel/0029VbBBR8lHgZWlUEXCP93U/307",
      unlocked: true,
      category: "Morning Routine",
      duration: "10 mins",
      description: "Start your day with God, strengthen your faith, and transform your life with these essential morning practices."
    }
  ];

  for (let i = 2; i <= 100; i++) {
    daysData.push({
      day: i,
      title: `Day ${i} Prophetic Message`,
      date: "Coming Soon",
      poster: null,
      link: null,
      unlocked: false,
      category: "Prophetic Audio",
      duration: "Stay Tuned",
      description: `Stay tuned! The Day ${i} audio message will be released daily as we continue this 100-day journey.`
    });
  }

  // Filter logic
  const filteredDays = daysData.filter(day => {
    const matchesSearch = day.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          day.day.toString() === searchTerm ||
                          day.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'Unlocked') {
      return matchesSearch && day.unlocked;
    } else if (activeFilter === 'Locked') {
      return matchesSearch && !day.unlocked;
    }
    return matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Background & Header */}
      <section className="relative py-20 text-center container mx-auto px-6 overflow-hidden rounded-b-[4rem]">
        <PropheticBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-4 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" /> Prophetic Audio Series
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 text-accent-charcoal tracking-tight">
              100 Days of <span className="text-primary text-glow-light">Audio Messages</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              He Taught Me. Now I Will Share. A spiritual journey to grow closer to God, understand Kingdom Systems, and walk in divine purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Poster & Info Section */}
      <section className="py-12 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Poster Column */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 max-w-md group hover:border-primary/50 transition-all duration-500">
              <img 
                src="/Images/100_days_audio_series.jpg" 
                alt="100 Days Audio Series Introductory Poster" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Series Info Details Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-accent-charcoal">
              God's Visions <span className="text-primary italic">Taught Me the Way.</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mb-2"></div>

            <p className="text-accent-charcoal/80 leading-relaxed text-lg">
              Beginning on <strong>June 14th</strong>, this 100-day journey is dedicated to sharing biblical truths, divine revelations, and prophetic words to empower youth and believers globally. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3 p-4 bg-secondary-dark/40 border border-primary/10 rounded-2xl">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-bold text-sm text-accent-charcoal">Release Schedule</h4>
                  <p className="text-xs text-accent-charcoal/60">Daily starting June 14, 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary-dark/40 border border-primary/10 rounded-2xl">
                <Headphones className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-bold text-sm text-accent-charcoal">Platform</h4>
                  <p className="text-xs text-accent-charcoal/60">WhatsApp Audio & Video</p>
                </div>
              </div>
            </div>

            <div className="glow-card p-6 rounded-2xl border-l-4 border-l-primary bg-secondary/50 mt-4 italic">
              <p className="text-accent-charcoal/80 text-md font-medium mb-2">
                "Write the vision and make it plain on tablets, that he may run who reads it."
              </p>
              <span className="text-primary font-bold text-sm">— Habakkuk 2:2</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a 
                href="https://whatsapp.com/channel/0029VbBBR8lHgZWlUEXCP93U" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Join Official WhatsApp Channel <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid & Filter Section */}
      <section className="py-16 bg-secondary/30 border-t border-primary/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-accent-charcoal">Daily Timeline</h2>
              <p className="text-sm text-accent-charcoal/60">Track your daily progress and listen to the audios</p>
            </div>

            {/* Filters & Search controls */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent-charcoal/40 w-4 h-4" />
                <input 
                  type="text"
                  placeholder="Search Day..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-primary/20 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:border-primary text-sm text-accent-charcoal"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex bg-white border border-primary/15 rounded-full p-1 shadow-sm shrink-0">
                {['All', 'Unlocked', 'Locked'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeFilter === filter ? 'bg-primary text-white' : 'text-accent-charcoal/60 hover:text-accent-charcoal'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          {filteredDays.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-primary/10">
              <Compass className="w-12 h-12 text-primary/40 mx-auto mb-4 animate-pulse" />
              <p className="text-accent-charcoal/60 font-bold uppercase tracking-wider text-sm">No days match your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDays.map((day) => (
                <motion.div
                  key={day.day}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`glow-card rounded-3xl overflow-hidden flex flex-col justify-between ${!day.unlocked ? 'opacity-80 bg-secondary/40 border-dashed' : 'border-primary/25 bg-white'}`}
                >
                  {/* Top content */}
                  <div>
                    {day.unlocked ? (
                      /* Unlocked Poster Card */
                      <div className="relative aspect-[3/4] overflow-hidden group">
                        <img 
                          src={day.poster} 
                          alt={day.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Play button overlay bottom-centered directly on the poster */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 z-10">
                          <div className="flex items-center justify-between mb-4">
                            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                              Day {day.day}
                            </span>
                            <span className="text-white/80 text-[10px] flex items-center gap-1 uppercase tracking-widest">
                              <Calendar className="w-3 h-3 text-primary" /> {day.date}
                            </span>
                          </div>

                          <h3 className="text-white font-extrabold text-lg leading-tight mb-6 line-clamp-2 drop-shadow-md">
                            {day.title}
                          </h3>

                          {/* Pulsing Play Button overlay at the bottom center of the poster */}
                          <div className="flex justify-center pb-2">
                            <a 
                              href={day.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-14 h-14 bg-primary text-white hover:bg-primary-light rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-110 relative group/btn"
                            >
                              <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-75"></div>
                              <Play className="w-7 h-7 fill-white translate-x-0.5 relative z-10" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Locked Card Header */
                      <div className="p-6 bg-secondary/80 border-b border-primary/5 flex items-center justify-between">
                        <span className="bg-accent-charcoal/10 text-accent-charcoal/60 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          Day {day.day}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-accent-charcoal/40 font-bold uppercase tracking-widest">
                          <Lock className="w-3.5 h-3.5 text-accent-charcoal/30" /> Locked
                        </div>
                      </div>
                    )}

                    {/* Details section */}
                    <div className="p-6">
                      {!day.unlocked && (
                        <>
                          <h3 className="font-extrabold text-lg text-accent-charcoal/60 mb-2">
                            {day.title}
                          </h3>
                          <p className="text-accent-charcoal/50 text-sm leading-relaxed mb-4">
                            {day.description}
                          </p>
                        </>
                      )}

                      {day.unlocked && (
                        <p className="text-accent-charcoal/70 text-sm leading-relaxed mb-4">
                          {day.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-xs font-bold text-accent-charcoal/50 border-t border-primary/5 pt-4">
                        <span className="flex items-center gap-1"><Volume2 className="w-3.5 h-3.5 text-primary/70" /> {day.category}</span>
                        <span>{day.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Play Button CTA at the bottom of the card */}
                  {day.unlocked ? (
                    <div className="p-6 pt-0">
                      <a 
                        href={day.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-accent-charcoal hover:bg-primary text-white hover:text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-accent-charcoal/10"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Play Audio Message
                      </a>
                    </div>
                  ) : (
                    <div className="p-6 pt-0">
                      <button 
                        disabled
                        className="w-full bg-secondary-dark text-accent-charcoal/30 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed border border-primary/5"
                      >
                        <Lock className="w-3.5 h-3.5" /> Coming Soon
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AudioSeries;
