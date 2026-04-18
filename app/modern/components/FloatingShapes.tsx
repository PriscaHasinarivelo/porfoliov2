'use client';

import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle top right */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-[#ffa101]/20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Triangle bottom left */}
      <motion.div
        className="absolute bottom-40 left-20 opacity-10"
        style={{
          width: 0,
          height: 0,
          borderLeft: '60px solid transparent',
          borderRight: '60px solid transparent',
          borderBottom: '100px solid #ffa101',
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Square middle left */}
      <motion.div
        className="absolute top-1/3 left-10 w-32 h-32 border border-[#fae6b1]/20 rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 55, 45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small circles scattered */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-[#ffa101]/40"
        animate={{
          y: [0, -50, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-[#b3dee5]/30"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-[#fae6b1]/50"
        animate={{
          y: [0, -40, 0],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dotted line */}
      <svg className="absolute top-20 left-1/4 w-96 h-32 opacity-20" viewBox="0 0 400 100">
        <motion.path
          d="M0,50 Q100,20 200,50 T400,50"
          fill="none"
          stroke="#ffa101"
          strokeWidth="2"
          strokeDasharray="10 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      {/* Gradient orb */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,161,1,0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
