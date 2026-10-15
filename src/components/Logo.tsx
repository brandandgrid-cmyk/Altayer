import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtext = true
}) => {
  // Dimension scaling
  const iconSize = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  const titleSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const subtextSize = size === 'sm' ? 'text-[7px]' : size === 'lg' ? 'text-[9.5px]' : 'text-[8px]';

  return (
    <div className={`inline-flex items-center gap-3 select-none cursor-pointer ${className}`}>
      {/* Official AL TAYER Arch Emblem */}
      <div className={`relative shrink-0 ${iconSize}`}>
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gold Gradients */}
            <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE885" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7A1E" />
              <stop offset="100%" stopColor="#E5C158" />
            </linearGradient>

            <linearGradient id="bgArchGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#3A0A02" />
              <stop offset="50%" stopColor="#1A0200" />
              <stop offset="100%" stopColor="#080000" />
            </linearGradient>

            <linearGradient id="buildingGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6310" />
            </linearGradient>

            <linearGradient id="buildingGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5C158" />
              <stop offset="60%" stopColor="#B38822" />
              <stop offset="100%" stopColor="#664B0A" />
            </linearGradient>
          </defs>

          {/* Outer Arched Frame */}
          <path 
            d="M 20 190 V 80 A 80 80 0 0 1 180 80 V 190 Z" 
            fill="url(#bgArchGrad)" 
            stroke="url(#goldArchGrad)" 
            strokeWidth="8"
          />

          {/* Inner Golden Arch Ring Outline */}
          <path 
            d="M 28 185 V 80 A 72 72 0 0 1 172 80 V 185" 
            stroke="url(#goldArchGrad)" 
            strokeWidth="2"
            opacity="0.8"
            fill="none"
          />

          {/* Left Tower Building Structure */}
          <path d="M 45 180 V 60 L 100 40 V 180 Z" fill="url(#buildingGradLeft)" />
          {/* Left Tower Dark Stripes / Slits */}
          <rect x="54" y="80" width="8" height="45" rx="1" fill="#1A0200" />
          <rect x="68" y="75" width="8" height="50" rx="1" fill="#1A0200" />
          <rect x="82" y="70" width="8" height="55" rx="1" fill="#1A0200" />

          {/* Right Building Structure */}
          <path d="M 103 180 V 72 L 155 88 V 180 Z" fill="url(#buildingGradRight)" />
          {/* Right Tower Slits */}
          <rect x="112" y="98" width="7" height="30" rx="1" fill="#1A0200" />
          <rect x="125" y="102" width="7" height="30" rx="1" fill="#1A0200" />
          <rect x="138" y="106" width="7" height="30" rx="1" fill="#1A0200" />

          {/* AT Monogram Circle Left */}
          <circle cx="68" cy="152" r="16" fill="#D4AF37" stroke="#1A0200" strokeWidth="2" />
          <circle cx="68" cy="152" r="14" fill="none" stroke="#1A0200" strokeWidth="1" />
          <text x="68" y="157" textAnchor="middle" fontSize="15" fontWeight="900" fontFamily="serif" fill="#1A0200">AT</text>

          {/* AT Monogram Circle Right */}
          <circle cx="132" cy="152" r="16" fill="#D4AF37" stroke="#1A0200" strokeWidth="2" />
          <circle cx="132" cy="152" r="14" fill="none" stroke="#1A0200" strokeWidth="1" />
          <text x="132" y="157" textAnchor="middle" fontSize="15" fontWeight="900" fontFamily="serif" fill="#1A0200">AT</text>

          {/* 4-Point Golden Star in Top Right */}
          <path 
            d="M 140 45 Q 140 30 140 15 Q 140 30 140 45 Q 125 45 110 45 Q 125 45 140 45 Q 140 60 140 75 Q 140 60 140 45 Q 155 45 170 45 Q 155 45 140 45 Z" 
            fill="url(#goldArchGrad)" 
          />
          <circle cx="140" cy="45" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Official Typography */}
      <div className="flex flex-col justify-center leading-tight">
        <span className={`font-serif tracking-widest font-black uppercase ${titleSize} ${
          variant === 'light' ? 'text-slate-900' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFE885] via-[#D4AF37] to-[#A0771E]'
        }`}>
          AL TAYER
        </span>
        {showSubtext && (
          <span className={`font-serif tracking-[0.25em] uppercase font-bold text-[#D4AF37] ${subtextSize} mt-0.5`}>
            BUILDING MATERIALS TRADING L.L.C.
          </span>
        )}
      </div>
    </div>
  );
};


