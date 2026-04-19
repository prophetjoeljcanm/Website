import React from 'react';

const MinistryLogo = ({ className = "h-12", showText = true, textColor = "text-accent-charcoal" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative h-full aspect-square">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-sm"
        >
          {/* Flame - Subtle Glow */}
          <circle cx="50" cy="35" r="10" fill="url(#flameGradient)" opacity="0.3" />
          
          {/* Crown Illustration */}
          <path 
            d="M30 35L35 45H65L70 35L60 40L50 30L40 40L30 35Z" 
            fill="#D4AF37" 
          />
          
          {/* Dove Silhouette */}
          <path 
            d="M20 50C25 45 35 42 45 45C55 48 65 45 75 40C70 50 65 55 55 60C50 65 40 70 30 75C35 70 30 65 25 60C20 55 15 55 20 50Z" 
            fill="#D4AF37" 
          />
          
          <defs>
            <radialGradient id="flameGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 35) rotate(90) scale(15)">
              <stop stopColor="#D4AF37" />
              <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`text-lg font-bold tracking-tight leading-none ${textColor} uppercase`}>
            Jesus <span className="text-primary italic">Christ</span>
          </span>
          <span className={`text-[9px] font-bold tracking-[0.25em] ${textColor} opacity-60 uppercase mt-1 whitespace-nowrap`}>
            Anointing Nations Ministry
          </span>
        </div>
      )}
    </div>
  );
};

export default MinistryLogo;
