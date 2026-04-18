'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardEnhancedProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCardEnhanced({ 
  children, 
  className = '',
  hover = true,
  glow = false
}: GlassCardEnhancedProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        backdrop-blur-xl bg-white/70 dark:bg-slate-800/20
        border border-slate-300/40 dark:border-slate-600/30
        shadow-lg shadow-slate-900/5
        ${hover ? 'hover:bg-white/80 dark:hover:bg-slate-800/30 hover:border-slate-400/50 dark:hover:border-slate-500/40' : ''}
        ${glow ? 'hover:shadow-slate-400/20' : ''}
        transition-all duration-500 ease-out
        ${className}
      `}
      whileHover={hover ? { 
        y: -4,
        transition: { duration: 0.3 }
      } : {}}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-transparent to-slate-200/30 dark:from-slate-400/5 dark:to-transparent opacity-50" />
      
      {/* Inner glow on hover */}
      {glow && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(148, 163, 184, 0.15) 0%, transparent 70%)'
          }}
        />
      )}

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-slate-300/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
