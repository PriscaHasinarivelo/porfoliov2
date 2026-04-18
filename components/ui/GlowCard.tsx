'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'teal' | 'green' | 'blue' | 'purple';
  hoverScale?: number;
}

const glowColors = {
  cyan: 'rgba(0, 212, 255, 0.5)',
  teal: 'rgba(0, 255, 200, 0.5)',
  green: 'rgba(57, 255, 20, 0.5)',
  blue: 'rgba(0, 128, 255, 0.5)',
  purple: 'rgba(184, 41, 221, 0.5)',
};

const borderColors = {
  cyan: 'rgba(0, 212, 255, 0.3)',
  teal: 'rgba(0, 255, 200, 0.3)',
  green: 'rgba(57, 255, 20, 0.3)',
  blue: 'rgba(0, 128, 255, 0.3)',
  purple: 'rgba(184, 41, 221, 0.3)',
};

export default function GlowCard({
  children,
  className = '',
  glowColor = 'cyan',
  hoverScale = 1.02,
}: GlowCardProps) {
  const glow = glowColors[glowColor];
  const border = borderColors[glowColor];

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(13, 17, 23, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${border}`,
      }}
      whileHover={{
        scale: hoverScale,
        borderColor: glow,
        boxShadow: `0 0 30px ${glow}, 0 0 60px ${glow.replace('0.5', '0.2')}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${border} 0%, transparent 50%, ${border} 100%)`,
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
        }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-2xl"
        style={{ borderColor: border.replace('0.3', '0.5') }} />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 rounded-tr-2xl"
        style={{ borderColor: border.replace('0.3', '0.5') }} />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 rounded-bl-2xl"
        style={{ borderColor: border.replace('0.3', '0.5') }} />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-2xl"
        style={{ borderColor: border.replace('0.3', '0.5') }} />

      {children}
    </motion.div>
  );
}
