'use client';

import { motion } from 'framer-motion';

const circuitPaths = [
  { d: 'M0 100 L100 100 L100 50 L200 50 L200 150 L300 150', delay: 0 },
  { d: 'M100 200 L100 250 L200 250 L200 300 L300 300', delay: 1 },
  { d: 'M50 350 L150 350 L150 400 L250 400 L250 450', delay: 2 },
  { d: 'M400 100 L500 100 L500 200 L600 200', delay: 0.5 },
  { d: 'M350 250 L450 250 L450 300 L550 300', delay: 1.5 },
  { d: 'M500 350 L600 350 L600 400 L700 400', delay: 2.5 },
];

const nodes = [
  { cx: 100, cy: 100, delay: 0 },
  { cx: 200, cy: 50, delay: 0.3 },
  { cx: 200, cy: 150, delay: 0.6 },
  { cx: 300, cy: 150, delay: 0.9 },
  { cx: 100, cy: 250, delay: 1.2 },
  { cx: 200, cy: 250, delay: 1.5 },
  { cx: 200, cy: 300, delay: 1.8 },
  { cx: 300, cy: 300, delay: 2.1 },
  { cx: 150, cy: 350, delay: 2.4 },
  { cx: 250, cy: 400, delay: 2.7 },
  { cx: 500, cy: 100, delay: 3 },
  { cx: 600, cy: 200, delay: 3.3 },
  { cx: 450, cy: 250, delay: 3.6 },
  { cx: 550, cy: 300, delay: 3.9 },
  { cx: 600, cy: 350, delay: 4.2 },
];

export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#0A0F1A]" />
      
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {circuitPaths.map((path, index) => (
            <motion.path
              key={index}
              d={path.d}
              fill="none"
              stroke="url(#circuitGlow)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                delay: path.delay,
                repeat: Infinity,
                repeatDelay: 4,
                ease: 'easeInOut',
              }}
            />
          ))}

          {nodes.map((node, index) => (
            <motion.circle
              key={index}
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill="#00D4FF"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/80 via-transparent to-[#0A0F1A]" />
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(123, 97, 255, 0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#00D4FF 1px, transparent 1px),
            linear-gradient(90deg, #00D4FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}