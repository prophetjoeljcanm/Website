import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowRight, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // For demonstration, we'll simulate a successful login 
      // In a real app, this would be an API call to http://localhost:5000/api/auth/login
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        login(data.user, data.token);
        navigate('/dashboard');
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      setError('Server connection failed. Make sure the backend is running.');
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-white flex items-center justify-center container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glow-card p-10 rounded-3xl w-full max-w-md"
      >
        <div className="text-center mb-10">
          <LogIn className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-accent-charcoal">Welcome Back</h1>
          <p className="text-accent-charcoal/60 text-sm mt-2">Access your prophetic journey and Kingdom resources.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-charcoal/30 w-5 h-5" />
              <input 
                type="email" 
                className="w-full bg-secondary/30 border border-primary/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary text-accent-charcoal"
                placeholder="yours@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-accent-charcoal/40 uppercase tracking-widest">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-charcoal/30 w-5 h-5" />
              <input 
                type="password" 
                className="w-full bg-secondary/30 border border-primary/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary text-accent-charcoal"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg">
            Sign In <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-accent-charcoal/60 text-sm flex items-center justify-center gap-2">
            Don't have an account? 
            <Link to="/register" className="text-primary font-bold hover:underline flex items-center gap-1">
              Join the Movement <UserPlus className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
