import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import MinistryLogo from './MinistryLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Join Classes', path: '/join' },
    { name: 'Media', path: '/media' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-5 shadow-md' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src="/Images/new logo of JCANM.png" alt="JCANM Logo" className="h-14 md:h-28 object-contain transition-all" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 items-center">
          {user && navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-accent-charcoal/70'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {user && <div className="h-6 w-px bg-primary/20 mx-2"></div>}

          {user ? (
            <div className="flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-charcoal transition-colors">
                Dashboard
              </Link>
              <div className="h-6 w-px bg-primary/20"></div>
              <div className="flex items-center gap-2 text-accent-charcoal/70">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold uppercase">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="text-accent-charcoal hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-bold uppercase"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary text-sm py-2.5 px-6 uppercase tracking-widest">Login</Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-accent-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-primary/10 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 px-6">
              {user && navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-accent-charcoal'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <Link to="/join" className="btn-primary inline-block text-center mt-4">Join Now</Link>
              ) : (
                <Link to="/register" className="btn-primary inline-block text-center mt-4">Sign Up</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
