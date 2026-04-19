'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './modern/contexts/LanguageContext';
import HorizontalNav from './modern/components/HorizontalNav';
import FloatingShapes from './modern/components/FloatingShapes';
import WelcomeDialog from './modern/components/WelcomeDialog';
import LinkedInQRCode from './modern/components/LinkedInQRCode';
import HeroSection from './modern/sections/HeroSection';
import AboutSection from './modern/sections/AboutSection';
import ProjectsSection from './modern/sections/ProjectsSection';
import ContactSection from './modern/sections/ContactSection';

const sections = [
  { id: 'hero', component: HeroSection },
  { id: 'about', component: AboutSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'contact', component: ContactSection },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  // Check for mobile viewport
  useEffect(() => {
    setIsMounted(true);
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
      // On mobile, scroll to the section
      if (isMobile && containerRef.current) {
        const sectionElements = containerRef.current.querySelectorAll('.mobile-section');
        if (sectionElements[index]) {
          sectionElements[index].scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [isMobile]);

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

  // Handle scroll on mobile to update active section
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is currently in view
      const sectionIndex = Math.round(scrollPosition / windowHeight);
      if (sectionIndex >= 0 && sectionIndex < sections.length && sectionIndex !== activeSection) {
        setActiveSection(sectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, activeSection]);

  // Handle explore from welcome dialog
  const handleExplore = () => {
    navigateToSection(1); // Go to about section
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className={`modern-portfolio ${isMobile ? 'mobile' : ''}`}>
      {/* Welcome Dialog */}
      <WelcomeDialog onExplore={handleExplore} />

      {/* LinkedIn QR Code - Fixed bottom right, only visible on About section */}
      <LinkedInQRCode activeSection={activeSection} />

      {/* Navigation */}
      <HorizontalNav 
        activeSection={activeSection} 
        onNavigate={navigateToSection} 
      />

      {/* Background Shapes */}
      <FloatingShapes />

      {/* Main Content Container */}
      <div 
        ref={containerRef}
        className={`relative ${isMobile ? 'h-auto min-h-screen overflow-y-auto overflow-x-hidden' : 'h-screen w-screen overflow-hidden'}`}
      >
        {/* Horizontal Slide Container */}
        <motion.div
          className={`${isMobile ? 'flex flex-col' : 'flex h-full'}`}
          animate={isMobile ? {} : {
            x: `-${activeSection * 100}vw`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 1,
          }}
          style={isMobile ? {} : {
            width: `${sections.length * 100}vw`,
          }}
        >
          {isMobile ? (
            // Mobile: Vertical scroll sections
            <>
              <div className="mobile-section min-h-screen w-full" key={`hero-${lang}`}>
                <HeroSection onNavigate={navigateToSection} />
              </div>
              <div className="mobile-section min-h-screen w-full" key={`about-${lang}`}>
                <AboutSection />
              </div>
              <div className="mobile-section min-h-screen w-full" key={`projects-${lang}`}>
                <ProjectsSection />
              </div>
              <div className="mobile-section min-h-screen w-full" key={`contact-${lang}`}>
                <ContactSection />
              </div>
            </>
          ) : (
            // Desktop: Horizontal slide
            <>
              <div className="w-screen h-full flex-shrink-0" key={`hero-${lang}`}>
                <HeroSection onNavigate={navigateToSection} />
              </div>
              <div className="w-screen h-full flex-shrink-0" key={`about-${lang}`}>
                <AboutSection />
              </div>
              <div className="w-screen h-full flex-shrink-0" key={`projects-${lang}`}>
                <ProjectsSection />
              </div>
              <div className="w-screen h-full flex-shrink-0" key={`contact-${lang}`}>
                <ContactSection />
              </div>
            </>
          )}
        </motion.div>

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
