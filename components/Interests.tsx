'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';

interface InterestsProps {
  lang: 'fr' | 'en';
}

export default function Interests({ lang }: InterestsProps) {
  const interests = portfolioData.interests;

  return (
    <section id="interests" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-slate-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
              {lang === 'fr' ? 'Centres d\'intérêt' : 'Interests'}
            </h2>
            <Heart className="w-5 h-5 text-slate-400" />
          </div>
          <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-12" />
        </RevealOnScroll>
        
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/70 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-300/40 hover:border-slate-400/50 hover:bg-white/90 dark:hover:bg-slate-700/40 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-slate-400/10">
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {interest.icon}
                  </motion.span>
                  <span className="font-medium text-slate-600 dark:text-slate-300 text-sm">
                    {interest.name[lang]}
                  </span>
                  <Sparkles className="w-3 h-3 text-slate-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
