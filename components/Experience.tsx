'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';
import GlassCardEnhanced from './GlassCardEnhanced';

interface ExperienceProps {
  lang: 'fr' | 'en';
}

export default function Experience({ lang }: ExperienceProps) {
  const experiences = portfolioData.experiences;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration - neutral */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-200/20 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
            {lang === 'fr' ? 'Expériences Professionnelles' : 'Professional Experience'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-16" />
        </RevealOnScroll>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0 }}
          />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-4 md:gap-8`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg shadow-slate-400/50" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-slate-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                  
                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <GlassCardEnhanced className="p-6" glow>
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-slate-400/20 to-slate-500/20">
                          <Building2 className="w-5 h-5 text-slate-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">
                            {exp.company}
                          </h3>
                          <p className="text-slate-500/80 font-medium">
                            {exp.role[lang]}
                          </p>
                        </div>
                      </div>
                      
                      {/* Period */}
                      <div className="flex items-center gap-2 mb-4 text-slate-500/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      
                      {/* Mission */}
                      <p className="text-slate-600/70 dark:text-slate-300/70 mb-4 leading-relaxed">
                        <span className="font-semibold text-slate-600/90">{lang === 'fr' ? 'Mission : ' : 'Mission: '}</span>
                        {exp.mission[lang]}
                      </p>
                      
                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="px-3 py-1 bg-slate-100/70 dark:bg-slate-700/40 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-300/40"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Tools */}
                      {exp.tools && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2">
                            {exp.tools.map((tool, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="px-3 py-1 bg-slate-200/40 dark:bg-slate-600/30 text-slate-500 dark:text-slate-400/80 rounded-full text-xs font-medium border border-slate-300/30"
                              >
                                {tool}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Database */}
                      {exp.database && (
                        <div className="flex flex-wrap gap-2">
                          {exp.database.map((db, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                              className="px-3 py-1 bg-slate-300/30 dark:bg-slate-500/20 text-slate-500 dark:text-slate-400/70 rounded-full text-xs font-medium border border-slate-300/20"
                            >
                              {db}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </GlassCardEnhanced>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
