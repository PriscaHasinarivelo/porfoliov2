'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import ThemeToggle from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher';
import NeonButton from '../ui/NeonButton';

interface FloatingNavProps {
  lang: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

export default function FloatingNav({ lang, onLanguageChange }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const nav = portfolioData.navigation;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: nav.home[lang] },
    { id: 'projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { id: 'about', label: nav.about[lang] },
    { id: 'experience', label: nav.experience[lang] },
    { id: 'skills', label: nav.skills[lang] },
    { id: 'contact', label: nav.contact[lang] },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? 'bg-[#0D1117]/80 backdrop-blur-xl border border-[#00D4FF]/20 shadow-[0_0_30px_rgba(0,212,255,0.1)]' 
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold gradient-text-neon hover:scale-105 transition-transform"
              >
                PH
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className={`transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-[#00D4FF]' 
                      : 'text-white/70 hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]"
                    />
                  )}
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00D4FF]/5" />
                </motion.button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
              </div>
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/20 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mx-4 mt-2 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(13, 17, 23, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
              }}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#00D4FF]/20 text-[#00D4FF]'
                        : 'text-white/70 hover:bg-[#00D4FF]/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2 border-t border-[#00D4FF]/20 mt-2">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-white/50">Langue</span>
                    <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          background: 'linear-gradient(90deg, #00D4FF, #00FFC8, #39FF14)',
          scaleX: 0,
        }}
        id="scroll-progress"
      />
    </>
  );
}
