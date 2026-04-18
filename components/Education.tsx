'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';
import GlassCardEnhanced from './GlassCardEnhanced';

interface EducationProps {
  lang: 'fr' | 'en';
}

export default function Education({ lang }: EducationProps) {
  const education = portfolioData.education;

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration - neutral */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-l from-slate-200/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-to-tr from-slate-300/10 to-transparent rounded-full blur-2xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-slate-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
              {lang === 'fr' ? 'Formations et Diplômes' : 'Education and Diplomas'}
            </h2>
            <BookOpen className="w-6 h-6 text-slate-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-16" />
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <RevealOnScroll key={index} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
              <GlassCardEnhanced className="p-8 h-full" glow>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-2xl flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="w-6 h-6 text-slate-600" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-1 leading-tight">
                      {edu.school}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500/60 text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Degree */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-semibold text-slate-500/70 uppercase tracking-wide">
                      {lang === 'fr' ? 'Diplôme' : 'Degree'}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-slate-700/90 dark:text-slate-300/90">
                    {edu.degree[lang]}
                  </p>
                </div>
                
                {/* Obtained date badge */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-300/30">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-slate-400/20 to-slate-500/20 border border-slate-300/40">
                    <span className="text-sm font-medium text-slate-600">
                      {lang === 'fr' ? 'Obtenu en ' : 'Obtained in '} {edu.obtainedDate}
                    </span>
                  </div>
                </div>
              </GlassCardEnhanced>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
