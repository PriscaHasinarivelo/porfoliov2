'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  glowColor?: 'cyan' | 'teal' | 'green' | 'blue';
  className?: string;
  icon?: ReactNode;
}

const glowColors = {
  cyan: '#00D4FF',
  teal: '#00FFC8',
  green: '#39FF14',
  blue: '#0080FF',
};

export default function NeonButton({
  children,
  href,
  onClick,
  variant = 'primary',
  glowColor = 'cyan',
  className = '',
  icon,
}: NeonButtonProps) {
  const color = glowColors[glowColor];

  const baseStyles = `
    relative inline-flex items-center gap-2 px-6 py-3 
    font-semibold text-sm tracking-wide
    rounded-xl overflow-hidden
    transition-all duration-300
    group
  `;

  const variants = {
    primary: {
      background: `linear-gradient(135deg, ${color}22, ${color}11)`,
      color: color,
      border: `1px solid ${color}50`,
    },
    secondary: {
      background: 'rgba(13, 17, 23, 0.8)',
      color: '#ffffff',
      border: `1px solid ${color}40`,
    },
    outline: {
      background: 'transparent',
      color: color,
      border: `1px solid ${color}60`,
    },
  };

  const content = (
    <>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${color}30, transparent 70%)`,
        }}
      />
      
      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 20px ${color}50, inset 0 0 20px ${color}20`,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}20, transparent)`,
        }}
      />
    </>
  );

  const style = variants[variant];

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${className}`}
        style={style}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
