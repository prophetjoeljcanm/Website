import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck, Zap, BookOpen, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropheticBackground from '../components/PropheticBackground';

const Home = () => {

  const highlights = [
    {
      title: "Kingdom Systems",
      description: "Understand the structures of the Kingdom and how to operate within divine protocols.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      link: "/join"
    },
    {
      title: "Authority in Action",
      description: "Moving from theory to power. Learn to walk in the authority given by the Spirit.",
      icon: <Zap className="w-8 h-8 text-primary" />,
      link: "/join"
    },
    {
      title: "Spiritual Growth",
      description: "A structured journey towards maturity, obedience, and character development.",
      icon: <UserPlus className="w-8 h-8 text-primary" />,
      link: "/about"
    }
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background System */}
        <PropheticBackground />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-primary font-bold tracking-[0.3em] uppercase mb-4">Prophetically Called</h4>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-accent-charcoal">
              Divinely <span className="text-primary italic">Chosen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-charcoal/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Raising a generation that walks in Kingdom Authority and transforms nations through the power of the Spirit.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/join" className="btn-primary flex items-center gap-2 group w-full md:w-auto">
                Join the Movement <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/media" className="btn-outline flex items-center gap-2 w-full md:w-auto">
                <Play className="w-5 h-5" /> Watch Messages
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Light Rays (CSS) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-secondary/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-accent-charcoal">Empowering Your Journey</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glow-card p-8 rounded-2xl flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-full border border-primary/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-accent-charcoal">{item.title}</h3>
                <p className="text-accent-charcoal/60 mb-6 flex-grow">{item.description}</p>
                <Link to={item.link} className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="glow-card p-12 rounded-3xl border-primary/20 bg-white/50 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-charcoal">Ready to walk in your Divine Purpose?</h2>
              <p className="text-accent-charcoal/70">Join thousands globally who are being equipped for the end-time move of God.</p>
            </div>
            <Link to="/join" className="btn-primary whitespace-nowrap">
              Register for Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
