'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

interface HorizontalNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function HorizontalNav({ activeSection, onNavigate }: HorizontalNavProps) {
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.about'), index: 0 },
    { label: t('nav.skills'), index: 1 },
    { label: t('nav.work'), index: 2 },
    { label: t('nav.contact'), index: 3 },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffa101] to-[#ff7b35] flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="text-white font-semibold text-xl tracking-wide">
            Prisca
          </span>
        </motion.div>

        {/* Navigation Links + Language Switch */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={`nav-${item.index}`}
              onClick={() => onNavigate(item.index)}
              className={`nav-link-modern relative ${activeSection === item.index ? 'active' : ''}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.index && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffa101] rounded-full"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          
          {/* Theme Switch */}
          <ThemeSwitch />
          
          {/* Language Switch */}
          <LanguageSwitch />
        </div>

        {/* Resume Button */}
        <motion.a
          href="/asset/cv/CV-HASINARIVELO.pdf"
          download="CV-HASINARIVELO.pdf"
          className="btn-modern hidden sm:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('nav.resume')}
        </motion.a>
      </div>
    </motion.nav>
  );
}
