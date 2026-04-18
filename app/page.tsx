'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingNav from '@/components/layout/FloatingNav';
import NeonHero from '@/components/hero/NeonHero';
import NeonAbout from '@/components/about/NeonAbout';
import NeonTimeline from '@/components/experience/NeonTimeline';
import SkillConstellation from '@/components/skills/SkillConstellation';
import ProjectGrid from '@/components/projects/ProjectGrid';
import NeonContact from '@/components/contact/NeonContact';

export default function Home() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / docHeight;
        scrollProgress.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <FloatingNav lang={lang} onLanguageChange={setLang} />
      
      {/* Main content */}
      <main>
        <NeonHero lang={lang} />
        <ProjectGrid lang={lang} showFeaturedOnly={true} />
        <NeonAbout lang={lang} />
        <NeonTimeline lang={lang} />
        <SkillConstellation lang={lang} />
        <NeonContact lang={lang} />
      </main>
    </div>
  );
}
