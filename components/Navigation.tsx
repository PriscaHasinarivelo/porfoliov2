'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  lang: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

export default function Navigation({ lang, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = portfolioData.navigation;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: nav.home[lang] },
    { id: 'about', label: nav.about[lang] },
    { id: 'experience', label: nav.experience[lang] },
    { id: 'education', label: nav.education[lang] },
    { id: 'skills', label: nav.skills[lang] },
    { id: 'certificates', label: nav.certificates[lang] },
    { id: 'interests', label: nav.interests[lang] },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-300/30 dark:border-slate-700/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              PH
            </button>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-slate-600/80 dark:text-slate-300/80 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-300 group"
              >
                {item.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-300 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/60 dark:bg-slate-800/40 border border-slate-300/40 dark:border-slate-600/40">
              <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
            </div>
            <div className="p-2 rounded-full bg-slate-100/60 dark:bg-slate-800/40 border border-slate-300/40 dark:border-slate-600/40">
              <ThemeToggle />
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100/60 dark:bg-slate-800/40 border border-slate-300/40 dark:border-slate-600/40 text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700/40 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 dark:bg-slate-900/40 backdrop-blur-xl border-t border-slate-300/30 dark:border-slate-700/30"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-600/80 dark:text-slate-300/80 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 rounded-lg transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-slate-300/30 dark:border-slate-700/30 mt-2">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm text-slate-500">Langue</span>
                  <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
