'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HorizontalNav from './components/HorizontalNav';
import SectionDots from './components/SectionDots';
import FloatingShapes from './components/FloatingShapes';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

const sections = [
  { id: 'hero', component: HeroSection },
  { id: 'about', component: AboutSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'contact', component: ContactSection },
];

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Navigate to section
  const navigateToSection = useCallback((index: number) => {
    if (index >= 0 && index < sections.length) {
      setActiveSection(index);
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobile) return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigateToSection(activeSection + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToSection(activeSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, navigateToSection, isMobile]);

  // Handle wheel event with debounce
  useEffect(() => {
    if (isMobile) return;
    
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      isScrolling = true;
      
      if (e.deltaY > 0 || e.deltaX > 0) {
        navigateToSection(activeSection + 1);
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        navigateToSection(activeSection - 1);
      }
      
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, navigateToSection, isMobile]);

  const CurrentSection = sections[activeSection].component;

  return (
    <div className="modern-portfolio">
      {/* Navigation */}
      <HorizontalNav 
        activeSection={activeSection} 
        onNavigate={navigateToSection} 
      />

      {/* Section Indicators */}
      {!isMobile && (
        <SectionDots
          activeSection={activeSection}
          onNavigate={navigateToSection}
          totalSections={sections.length}
        />
      )}

      {/* Background Shapes */}
      <FloatingShapes />

      {/* Main Content Container */}
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Horizontal Slide Container */}
        <motion.div
          className="flex h-full"
          animate={{
            x: isMobile ? 0 : `-${activeSection * 100}vw`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 1,
          }}
          style={{
            width: isMobile ? '100%' : `${sections.length * 100}vw`,
          }}
        >
          {isMobile ? (
            // Mobile: Vertical scroll
            <div className="w-full h-full overflow-y-auto">
              <div className="min-h-screen">
                <HeroSection />
              </div>
              <div className="min-h-screen">
                <AboutSection />
              </div>
              <div className="min-h-screen">
                <ProjectsSection />
              </div>
              <div className="min-h-screen">
                <ContactSection />
              </div>
            </div>
          ) : (
            // Desktop: Horizontal slide
            <>
              <div className="w-screen h-full flex-shrink-0">
                <HeroSection />
              </div>
              <div className="w-screen h-full flex-shrink-0">
                <AboutSection />
              </div>
              <div className="w-screen h-full flex-shrink-0">
                <ProjectsSection />
              </div>
              <div className="w-screen h-full flex-shrink-0">
                <ContactSection />
              </div>
            </>
          )}
        </motion.div>

        {/* Slide Indicators */}
        {!isMobile && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => navigateToSection(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? 'w-8 bg-[#ffa101]'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}

        {/* Section Label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-8 left-8 z-50 hidden lg:block"
          >
            <span className="text-[#ffa101] font-medium tracking-widest text-sm">
              {String(activeSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
            </span>
            <div className="text-white/40 text-xs mt-1 capitalize">
              {sections[activeSection].id}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {!isMobile && (
          <>
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-[#ffa101] hover:border-[#ffa101]/50 transition-all disabled:opacity-30"
              onClick={() => navigateToSection(activeSection - 1)}
              disabled={activeSection === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-[#ffa101] hover:border-[#ffa101]/50 transition-all disabled:opacity-30"
              onClick={() => navigateToSection(activeSection + 1)}
              disabled={activeSection === sections.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}
