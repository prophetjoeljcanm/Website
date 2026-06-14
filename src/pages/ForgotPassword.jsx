import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.msg || 'Reset link requested');
      } else {
        setError(data.msg || data.error || 'Failed to send request');
      }
    } catch (err) {
      setError('Server connection failed. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-white flex items-center justify-center container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glow-card p-10 rounded-3xl w-full max-w-md"
      >
        <div className="mb-6">
          <Link to="/login" className="flex items-center text-primary hover:underline text-sm font-bold">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Login
          </Link>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-accent-charcoal">Forgot Password</h1>
          <p className="text-accent-charcoal/60 text-sm mt-2">Enter your email to receive a password reset link.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
            {error}
          </div>
        )}
        
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
            {message}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg disabled:opacity-70">
            {loading ? 'Sending...' : 'Send Reset Link'} <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
