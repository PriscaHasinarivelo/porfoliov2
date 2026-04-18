'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillGraphProps {
  skill: string;
  index: number;
}

export default function SkillGraph({ skill, index }: SkillGraphProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Animated line background */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <svg 
          className="absolute inset-0 w-full h-full" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#64748b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke={`url(#gradient-${index})`}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* Skill content */}
      <div className="relative z-10 flex items-center gap-3 py-3 px-4 rounded-lg bg-white/60 dark:bg-slate-700/20 backdrop-blur-sm border border-slate-300/30 hover:border-slate-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-slate-400/10">
        {/* Glow dot */}
        <motion.div
          className="w-2 h-2 rounded-full bg-slate-400"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        />
        
        {/* Skill name */}
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {skill}
        </span>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 animate-shimmer" />
        </div>
      </div>
    </motion.div>
  );
}
