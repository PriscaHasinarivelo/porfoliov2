'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.button
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
      className="relative flex items-center gap-1 px-1 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Sliding background */}
      <motion.div
        className="absolute h-7 w-10 rounded-full bg-[#ffa101]"
        initial={false}
        animate={{
          x: lang === 'fr' ? 2 : 46,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* FR Label */}
      <span
        className={`relative z-10 w-10 h-7 flex items-center justify-center text-sm font-semibold rounded-full transition-colors duration-200 ${
          lang === 'fr' ? 'text-[#31525b]' : 'text-white/60'
        }`}
      >
        FR
      </span>

      {/* EN Label */}
      <span
        className={`relative z-10 w-10 h-7 flex items-center justify-center text-sm font-semibold rounded-full transition-colors duration-200 ${
          lang === 'en' ? 'text-[#31525b]' : 'text-white/60'
        }`}
      >
        EN
      </span>
    </motion.button>
  );
}
