import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook, Twitter, CheckCircle2, Loader2 } from 'lucide-react';
import apiService from '../services/api';

const PrayerContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await apiService.submitInquiry({
        ...formData,
        type: 'prayer'
      });
      setStatus('success');
      setFormData({ name: '', email: '', location: '', message: '' });
    } catch (err) {
      console.error('Error submitting prayer request:', err);
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", url: "#" },
    { icon: <Youtube className="w-6 h-6" />, name: "YouTube", url: "#" },
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", url: "#" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", url: "#" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-accent-charcoal">Prayer & <span className="text-primary">Counsel</span></h1>
          <p className="text-xl text-accent-charcoal/60 max-w-2xl mx-auto">
            We are standing in the gap for you. Send your prayer requests and testimonies to the Prophet.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-accent-charcoal">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-accent-charcoal/40 text-sm uppercase tracking-widest">Email Us</h4>
                  <p className="text-xl text-accent-charcoal">contact@abieljoel.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-accent-charcoal/40 text-sm uppercase tracking-widest">Call Ministry</h4>
                  <p className="text-xl text-accent-charcoal">+1 (234) 567 890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-accent-charcoal/40 text-sm uppercase tracking-widest">Ministry HQ</h4>
                  <p className="text-xl text-accent-charcoal">Global Glory Center, TX</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 text-accent-charcoal">Follow the Move</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-accent-charcoal hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Prayer Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glow-card p-10 rounded-3xl"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent-charcoal">Request Received!</h3>
                <p className="text-accent-charcoal/60 mb-8">Your prayer request has been sent to the Ministry. We are standing with you.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline">Send Another</button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-8 italic text-primary">"Is any among you afflicted? Let him pray."</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-secondary/30 border border-primary/10 rounded-xl p-4 focus:outline-none focus:border-primary text-accent-charcoal" 
                        placeholder="Enter name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest">Location</label>
                      <input 
                        type="text" 
                        className="w-full bg-secondary/30 border border-primary/10 rounded-xl p-4 focus:outline-none focus:border-primary text-accent-charcoal" 
                        placeholder="City, Country" 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-secondary/30 border border-primary/10 rounded-xl p-4 focus:outline-none focus:border-primary text-accent-charcoal" 
                      placeholder="Email for reply" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest">Prayer Request / Testimony</label>
                    <textarea 
                      rows="6" 
                      required
                      className="w-full bg-secondary/30 border border-primary/10 rounded-xl p-4 focus:outline-none focus:border-primary text-accent-charcoal" 
                      placeholder="Share your heart..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>Processing... <Loader2 className="animate-spin w-5 h-5" /></>
                    ) : (
                      <>Submit Request <Send className="w-5 h-5" /></>
                    )}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-xs font-bold text-center">Failed to submit. Please try again.</p>}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrayerContact;
