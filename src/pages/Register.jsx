import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, UserPlus, ArrowRight, LogIn, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        login(data.user, data.token);
        navigate('/');
      } else {
        setError(data.msg || data.error || 'Registration failed. Please check the server logs.');
      }
    } catch (err) {
      setError(err.message || 'Server connection failed. Make sure the backend is running.');
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-secondary/30 flex items-center justify-center container mx-auto px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glow-card p-10 rounded-3xl w-full max-w-md relative z-10 bg-white shadow-2xl border-primary/20"
      >
        <div className="text-center mb-10">
          <UserPlus className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-accent-charcoal">Join the Movement</h1>
          <p className="text-accent-charcoal/60 text-sm mt-2">Create an account to access our prophetic resources.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest pl-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-charcoal/40 w-5 h-5" />
              <input 
                type="text" 
                className="w-full bg-secondary/50 border border-primary/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                placeholder="Prophet/Dr/Mr/Ms..."
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest pl-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-charcoal/40 w-5 h-5" />
              <input 
                type="email" 
                className="w-full bg-secondary/50 border border-primary/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                placeholder="yours@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest pl-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-charcoal/40 w-5 h-5" />
              <input 
                type="password" 
                className="w-full bg-secondary/50 border border-primary/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary text-accent-charcoal transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full py-4 mt-2 flex items-center justify-center gap-2 text-lg shadow-xl hover:shadow-primary/30">
            Sign Up <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-accent-charcoal/60 text-sm flex items-center justify-center gap-2">
            Already have an account? 
            <Link to="/login" className="text-primary font-bold hover:underline flex items-center gap-1">
              Sign In <LogIn className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
