'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Very subtle gradient mesh - mostly neutral */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(148, 163, 184, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(100, 116, 139, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(71, 85, 105, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #F5F4F3 0%, #FAFAF9 50%, #F5F4F3 100%)
          `
        }}
      />

      {/* Floating geometric shapes - neutral tones */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 border border-slate-300/20 rounded-full"
        style={{ animationDelay: '0s' }}
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-40 right-[15%] w-3 h-3 border border-slate-400/20"
        animate={{ y: [0, -30, 0], rotate: [45, 135, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-40 left-[20%] w-2 h-2 bg-slate-300/20 rounded-full"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-60 left-[30%] w-1.5 h-1.5 bg-slate-400/20"
        animate={{ y: [0, -25, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute bottom-60 right-[25%] w-4 h-4 border border-slate-300/15 rounded-full"
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Plus signs - very subtle */}
      <motion.div
        className="absolute top-32 right-[40%] text-slate-400/20 text-2xl font-light"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        +
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[50%] text-slate-300/25 text-xl font-light"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        +
      </motion.div>

      <motion.div
        className="absolute top-[45%] left-[8%] text-slate-400/15 text-lg font-light"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        +
      </motion.div>

      {/* Subtle gradient orbs - much reduced */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-slate-200/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-slate-300/15 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
