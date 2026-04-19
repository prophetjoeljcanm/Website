import React from 'react';
import { motion } from 'framer-motion';

const PropheticBackground = () => {
  const orbs = [
    { size: 'w-[600px] h-[600px]', color: 'bg-primary/10', initial: { x: '-20%', y: '-10%' }, duration: 15 },
    { size: 'w-[500px] h-[500px]', color: 'bg-secondary-dark/60', initial: { x: '40%', y: '10%' }, duration: 18 },
    { size: 'w-[700px] h-[700px]', color: 'bg-primary/5', initial: { x: '10%', y: '40%' }, duration: 20 },
    { size: 'w-[450px] h-[450px]', color: 'bg-secondary/60', initial: { x: '-10%', y: '60%' }, duration: 12 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white pointer-events-none">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-white to-secondary/30"></div>
      
      {/* Animated Light Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={orb.initial}
          animate={{
            x: [orb.initial.x, '20%', '-10%', orb.initial.x],
            y: [orb.initial.y, '10%', '30%', orb.initial.y],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${orb.size} ${orb.color} rounded-full blur-[120px]`}
        />
      ))}

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
      
      {/* Glassmorphic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40"></div>
    </div>
  );
};

export default PropheticBackground;
