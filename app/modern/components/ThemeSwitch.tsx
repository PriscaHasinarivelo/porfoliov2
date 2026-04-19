'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex items-center gap-1 px-1 py-1 rounded-full bg-white/10 border border-white/20 w-[60px] h-[34px]">
        <div className="w-7 h-7 rounded-full bg-white/20" />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex items-center gap-1 px-1 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm w-[60px] h-[34px]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {/* Sliding background */}
      <motion.div
        className="absolute h-7 w-7 rounded-full bg-[#ffa101]"
        initial={false}
        animate={{
          x: isDark ? 2 : 30,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Sun Icon */}
      <span
        className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ${
          !isDark ? 'text-[#31525b]' : 'text-white/60'
        }`}
      >
        <Sun className="w-4 h-4" />
      </span>

      {/* Moon Icon */}
      <span
        className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ${
          isDark ? 'text-[#31525b]' : 'text-white/60'
        }`}
      >
        <Moon className="w-4 h-4" />
      </span>
    </motion.button>
  );
}
