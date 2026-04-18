'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function GlowButton({ 
  children, 
  href, 
  onClick, 
  className = '',
  variant = 'primary'
}: GlowButtonProps) {
  const baseClasses = `
    relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-sm
    transition-all duration-300 ease-out
    backdrop-blur-md border
    ${variant === 'primary' 
      ? 'bg-slate-700/90 text-white border-slate-500/50 hover:bg-slate-700 hover:border-slate-400' 
      : 'bg-white/20 text-slate-600 dark:text-slate-200 border-slate-300/40 hover:bg-white/30 hover:border-slate-400/50'
    }
    ${className}
  `;

  const content = (
    <>
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          variant === 'primary' ? 'bg-slate-400/20' : 'bg-slate-300/10'
        }`}
        style={{ filter: 'blur(20px)' }}
      />
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ 
          boxShadow: variant === 'primary' 
            ? 'inset 0 0 20px rgba(148, 163, 184, 0.3), 0 0 30px rgba(71, 85, 105, 0.3)' 
            : 'inset 0 0 20px rgba(148, 163, 184, 0.2), 0 0 20px rgba(100, 116, 139, 0.2)'
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
