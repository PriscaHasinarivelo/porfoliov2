'use client';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

export default function ElectricPortfolio() {
  return (
    <div className="electric-portfolio">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}