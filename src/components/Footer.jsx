import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, MessageCircle } from 'lucide-react';
import MinistryLogo from './MinistryLogo';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <img src="/Images/new logo of JCANM.png" alt="JCANM Logo" className="h-16 object-contain" />
            </div>
            <p className="text-accent-charcoal/60 text-sm leading-relaxed mb-6">
              Jesus Christ Anointing Nations Ministry (JCANM) is a Global Prophetic Movement dedicated to transforming lives through Kingdom Authority and Holy Spirit power.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/prophetabieljoel/" target="_blank" rel="noopener noreferrer" className="text-accent-charcoal hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-accent-charcoal hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="https://whatsapp.com/channel/0029VbBBR8lHgZWlUEXCP93U" target="_blank" rel="noopener noreferrer" className="text-accent-charcoal hover:text-primary transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-accent-charcoal hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-accent-charcoal/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About the Prophet</Link></li>
              <li><Link to="/join" className="hover:text-primary transition-colors">Prophetical Classes</Link></li>
              <li><Link to="/media" className="hover:text-primary transition-colors">Media & Reels</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Kingdom Systems</h4>
            <ul className="space-y-4 text-sm text-accent-charcoal/70">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Prayer Requests</Link></li>
              <li><Link to="/join" className="hover:text-primary transition-colors">Register for Movement</Link></li>
              <li><Link to="/media" className="hover:text-primary transition-colors">Watch Messages</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ministry Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Join the Movement</h4>
            <p className="text-sm text-accent-charcoal/60 mb-4">Get prophetic updates and daily bread delivered to your inbox.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white border border-primary/20 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-primary transition-colors text-accent-charcoal text-sm"
                id="newsletter-email"
              />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md font-bold hover:bg-primary-dark transition-colors text-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-primary italic font-serif text-lg mb-4">"Your Kingdom Come. Your Will Be Done."</p>
          <p className="text-accent-charcoal/40 text-[10px] text-center uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Jesus Christ Apostolic Network Ministry (JCANM). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
