'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';
import PDFModal from '../../components/PDFModal';

interface HorizontalNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function HorizontalNav({ activeSection, onNavigate }: HorizontalNavProps) {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const navItems = [
    { label: t('nav.about'), index: 0 },
    { label: t('nav.skills'), index: 1 },
    { label: t('nav.work'), index: 2 },
    { label: t('nav.contact'), index: 3 },
  ];

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 py-4 sm:py-6"
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#ffa101] to-[#ff7b35] flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              P
            </div>
            <span className="text-white font-semibold text-lg sm:text-xl tracking-wide">
              Prisca
            </span>
          </motion.div>

          {/* Navigation Links + Language Switch - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={`nav-${item.index}`}
                onClick={() => handleNavigate(item.index)}
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
            
            {/* Electric Mode Button */}
            <Link href="/electric" className="hidden md:flex">
              <motion.button
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#ffa101]/10 border border-[#ffa101]/30 text-[#ffa101] text-sm font-medium hover:bg-[#ffa101]/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-4 h-4" />
                <span>Electric</span>
              </motion.button>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Language Switch */}
            <div className="md:hidden">
              <LanguageSwitch />
            </div>

            {/* Resume Button - Desktop */}
            <motion.button
              onClick={() => setIsPDFOpen(true)}
              className="btn-modern hidden sm:flex text-sm px-4 py-2 items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-4 h-4" />
              {t('nav.resume')}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-[#31525b]/95 backdrop-blur-xl rounded-2xl border border-[#ffa101]/20 p-6 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={`mobile-nav-${item.index}`}
                    onClick={() => handleNavigate(item.index)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === item.index 
                        ? 'bg-[#ffa101]/20 text-[#ffa101]' 
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.button
                  onClick={() => {
                    setIsPDFOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-modern mt-4 text-center text-sm w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('nav.resume')}
                </motion.button>
                
                {/* Mobile Electric Mode Button */}
                <Link href="/electric" className="mt-2">
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ffa101]/10 border border-[#ffa101]/30 text-[#ffa101] text-base font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-5 h-5" />
                    <span>Mode Electric</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Preview Modal */}
      <PDFModal isOpen={isPDFOpen} onClose={() => setIsPDFOpen(false)} />
    </>
  );
}
