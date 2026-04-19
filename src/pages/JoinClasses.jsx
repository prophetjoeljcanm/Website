import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Flame, 
  Send, 
  Loader2, 
  Sparkles, 
  ShieldCheck, 
  Mic2, 
  Eye, 
  Globe, 
  Monitor, 
  Gift,
  Crown
} from 'lucide-react';
import apiService from '../services/api';

const JoinClasses = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await apiService.submitInquiry({
        ...formData,
        type: 'prophetic_class_registration',
        message: `Online Prophetic Classes Registration - From: ${formData.country}`
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', country: '' });
    } catch (err) {
      console.error('Error registering for classes:', err);
      setStatus('error');
    }
  };

  const whyJoin = [
    {
      title: "Hear the voice of God more clearly",
      icon: <Mic2 className="w-6 h-6 text-primary" />,
      desc: "Develop a deeper intimacy and sensitivity to the Spirit's whisper."
    },
    {
      title: "Grow in your prophetic calling",
      icon: <Flame className="w-6 h-6 text-primary" />,
      desc: "Identify and sharpen the specific prophetic graces upon your life."
    },
    {
      title: "Operate in spiritual authority",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      desc: "Walk with confidence in the power and authority given by Christ."
    }
  ];

  const whatYouWillLearn = [
    "How to hear God’s voice with precision",
    "Understanding the diverse prophetic gifts",
    "Spiritual discernment & activation",
    "Prayer strategies and effective intercession",
    "Walking in the tangible anointing"
  ];

  const programDetails = [
    { label: "Mode", value: "100% Online", icon: <Monitor className="w-5 h-5" /> },
    { label: "Access", value: "Open for all nations", icon: <Globe className="w-5 h-5" /> },
    { label: "Fee", value: "FREE (No Registration Fee)", icon: <Gift className="w-5 h-5 text-green-600" /> }
  ];

  return (
    <div className="pt-24 min-h-screen bg-secondary/30 overflow-hidden">
      {/* Hero Section with Prophetic Aesthetic */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow"></div>
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-96 h-96 bg-primary/5 blur-[80px] rounded-full"
          ></motion.div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <img src="/src/assets/logo.png" alt="JCANM Logo" className="h-24 md:h-32 relative z-10 drop-shadow-2xl" />
            </div>
            
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Jesus Christ Anointing Nations Ministry
            </motion.h4>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-8xl font-black text-accent-charcoal mb-6 leading-none"
            >
              Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-dark">Prophetic</span> <br /> Classes
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-accent-charcoal/70 max-w-2xl mx-auto italic"
            >
              "Step into your prophetic calling and grow in spiritual authority through our guided online training."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Why Join? */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-accent-charcoal flex items-center gap-3">
                <Sparkles className="text-primary w-8 h-8" /> Why Join This Program?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {whyJoin.map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/50 border border-primary/10 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-accent-charcoal mb-2">{item.title}</h3>
                      <p className="text-accent-charcoal/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What You Will Learn */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glow-card p-8 md:p-12 rounded-[2rem] border-primary/20 bg-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Crown size={200} className="text-primary" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-accent-charcoal mb-8 flex items-center gap-3">
                  <Flame className="text-primary w-8 h-8" /> What You Will Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {whatYouWillLearn.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-accent-charcoal/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Registration Form */}
          <div className="lg:col-span-5">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="sticky top-32"
            >
              <div className="bg-white rounded-[2rem] shadow-2xl border border-primary/20 p-8 md:p-10 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    Limited Seats Available ⚠️
                  </span>
                  <h3 className="text-2xl font-bold text-accent-charcoal mb-2">Register Now</h3>
                  <p className="text-accent-charcoal/60 mb-8 text-sm leading-relaxed">Enroll now and be part of this prophetic move! All fields are required.</p>

                  {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-accent-charcoal mb-4">Enrollment Success!</h4>
                      <p className="text-accent-charcoal/60 text-sm mb-8">Hallelujah! We have received your registration. Check your email shortly for the class access details.</p>
                      <button 
                        onClick={() => setStatus('idle')} 
                        className="text-primary font-bold hover:underline"
                      >
                        Register Another Person
                      </button>
                    </motion.div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-accent-charcoal/60 uppercase ml-2">Full Name</label>
                        <input 
                          type="text" required placeholder="Prophet/Dr/Mr/Ms..." 
                          className="w-full bg-secondary/30 border border-primary/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-accent-charcoal/60 uppercase ml-2">Email Address</label>
                        <input 
                          type="email" required placeholder="your.email@example.com" 
                          className="w-full bg-secondary/30 border border-primary/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-accent-charcoal/60 uppercase ml-2">WhatsApp #</label>
                          <input 
                            type="tel" required placeholder="+1..." 
                            className="w-full bg-secondary/30 border border-primary/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-accent-charcoal/60 uppercase ml-2">Country</label>
                          <input 
                            type="text" required placeholder="USA, India, etc." 
                            className="w-full bg-secondary/30 border border-primary/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                            value={formData.country}
                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg shadow-xl hover:shadow-primary/20 mt-4 disabled:opacity-50"
                      >
                        {status === 'loading' ? (
                          <>Processing Submission... <Loader2 className="animate-spin w-6 h-6" /></>
                        ) : (
                          <>Confirm Enrollment <Send className="w-5 h-5" /></>
                        )}
                      </button>
                      
                      {status === 'error' && (
                        <p className="text-red-500 text-xs font-bold text-center mt-2">
                          Something went wrong. Please try again later or contact us.
                        </p>
                      )}
                    </form>
                  )}

                  {/* Program Details Table-like box */}
                  <div className="mt-8 pt-8 border-t border-primary/10 grid grid-cols-1 gap-4">
                    {programDetails.map((detail, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-accent-charcoal/60">
                          {detail.icon}
                          <span>{detail.label}</span>
                        </div>
                        <span className="font-bold text-accent-charcoal">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ministry Footer Info */}
              <div className="mt-8 text-center px-6">
                <h4 className="font-bold text-accent-charcoal mb-2">About the Ministry</h4>
                <p className="text-xs text-accent-charcoal/60 leading-relaxed italic">
                  Jesus Christ Anointing Nations Ministry (JCANM) is committed to equipping believers to grow spiritually, walk in the anointing, and fulfill their God-given calling.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
      
      {/* Decorative Final Section */}
      <section className="py-20 bg-accent-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Step into Your Calling?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 italic">
              Don't miss this prophetic window of opportunity. Space is limited for quality interaction and activation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest text-primary">
              <span>#PROPHETIC_CLASSES</span>
              <span>•</span>
              <span>#HOLY_SPIRIT_TRAINING</span>
              <span>•</span>
              <span>#JCANM</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinClasses;
