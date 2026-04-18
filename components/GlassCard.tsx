'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`
      backdrop-blur-lg 
      bg-white/10 
      dark:bg-white/5 
      border border-white/20 
      dark:border-white/10 
      rounded-2xl 
      shadow-xl
      ${className}
    `}>
      {children}
    </div>
  );
}
