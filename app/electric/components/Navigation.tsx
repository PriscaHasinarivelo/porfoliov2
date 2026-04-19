'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PDFModal from '../../components/PDFModal';

const navItems = [
  { id: 'hero', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'about', label: { fr: 'À propos', en: 'About' } },
  { id: 'experience', label: { fr: 'Expérience', en: 'Experience' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom > 150;
      });
      
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0A0F1A]/80 backdrop-blur-xl border-b border-[#00D4FF]/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 cursor-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <span className="text-white font-semibold hidden sm:block">
                Prisca
              </span>
            </motion.button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-hover ${
                    activeSection === item.id 
                      ? 'text-[#00D4FF]' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label[lang]}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00D4FF]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* CV Button - Desktop */}
              <motion.button
                onClick={() => setIsPDFOpen(true)}
                className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-medium hover:bg-[#00D4FF]/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'fr' ? 'CV' : 'Resume'}</span>
              </motion.button>

              {/* Modern Mode Button */}
              <Link href="/" className="hidden lg:flex">
                <motion.button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-medium hover:bg-[#00D4FF]/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Modern</span>
                </motion.button>
              </Link>
              
              <button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] text-sm font-semibold cursor-hover hover:bg-[#00D4FF]/20 transition-colors"
              >
                {lang.toUpperCase()}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-hover"
              >
                <motion.span
                  className="w-6 h-0.5 bg-white"
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white"
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className="fixed inset-0 z-40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        <motion.div
          className="absolute top-24 left-6 right-6 bg-[#0A0F1A]/95 backdrop-blur-xl rounded-2xl border border-[#00D4FF]/20 p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-hover ${
                  activeSection === item.id 
                    ? 'bg-[#00D4FF]/10 text-[#00D4FF]' 
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label[lang]}
              </motion.button>
            ))}
            
            {/* Mobile CV Button */}
            <motion.button
              onClick={() => {
                setIsPDFOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00FF94]/10 border border-[#00FF94]/30 text-[#00FF94] text-base font-medium mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
              transition={{ delay: navItems.length * 0.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="w-5 h-5" />
              <span>{lang === 'fr' ? 'Voir mon CV' : 'View Resume'}</span>
            </motion.button>

            {/* Mobile Modern Mode Button */}
            <Link href="/" className="mt-2">
              <motion.button
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-base font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-5 h-5" />
                <span>Mode Modern</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* PDF Preview Modal */}
      <PDFModal isOpen={isPDFOpen} onClose={() => setIsPDFOpen(false)} />
    </>
  );
}