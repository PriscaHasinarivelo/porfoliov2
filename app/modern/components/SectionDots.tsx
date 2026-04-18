'use client';

import { motion } from 'framer-motion';

interface SectionDotsProps {
  activeSection: number;
  onNavigate: (index: number) => void;
  totalSections: number;
}

export default function SectionDots({ activeSection, onNavigate, totalSections }: SectionDotsProps) {
  return (
    <div className="section-dots">
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onNavigate(index)}
          className={`section-dot ${activeSection === index ? 'active' : ''}`}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        />
      ))}
    </div>
  );
}
