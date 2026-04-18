'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Building2, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlowCard from '../ui/GlowCard';

interface NeonTimelineProps {
  lang: 'fr' | 'en';
}

export default function NeonTimeline({ lang }: NeonTimelineProps) {
  const experiences = portfolioData.experiences;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00FFC8]/5 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/5 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: 'rgba(0, 255, 200, 0.1)',
              border: '1px solid rgba(0, 255, 200, 0.2)',
            }}
          >
            <Briefcase className="w-4 h-4 text-[#00FFC8]" />
            <span className="text-sm text-[#00FFC8]">
              {lang === 'fr' ? 'Parcours' : 'Experience'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-neon">
              {lang === 'fr' ? 'Expériences Professionnelles' : 'Professional Experience'}
            </span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'Mon parcours professionnel dans le développement logiciel.'
              : 'My professional journey in software development.'
            }
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #00D4FF 0%, #00FFC8 50%, #39FF14 100%)',
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Mobile line */}
          <motion.div
            className="md:hidden absolute left-4 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, #00D4FF 0%, #00FFC8 50%, #39FF14 100%)',
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const glowColors = ['cyan', 'teal', 'green', 'blue'] as const;
              const glowColor = glowColors[index % glowColors.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start gap-4 md:gap-8`}
                >
                  {/* Timeline node */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
                  >
                    <div 
                      className="w-full h-full rounded-full shadow-lg"
                      style={{
                        background: index % 3 === 0 ? '#00D4FF' : index % 3 === 1 ? '#00FFC8' : '#39FF14',
                        boxShadow: `0 0 20px ${index % 3 === 0 ? '#00D4FF' : index % 3 === 1 ? '#00FFC8' : '#39FF14'}`,
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: index % 3 === 0 ? '#00D4FF' : index % 3 === 1 ? '#00FFC8' : '#39FF14',
                      }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <GlowCard className="p-6" glowColor={glowColor} hoverScale={1.02}>
                      {/* Company & Role */}
                      <div className={`flex items-start gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div 
                          className="p-2 rounded-xl flex-shrink-0"
                          style={{
                            background: `rgba(0, 212, 255, 0.1)`,
                            border: `1px solid rgba(0, 212, 255, 0.2)`,
                          }}
                        >
                          <Building2 className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-[#00FFC8] font-medium">
                            {exp.role[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className={`flex items-center gap-2 mb-4 text-white/50 ${isLeft ? 'md:justify-end' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      {/* Mission */}
                      <p className="text-white/70 mb-4 leading-relaxed">
                        <span className="text-[#00D4FF] font-semibold">
                          {lang === 'fr' ? 'Mission : ' : 'Mission: '}
                        </span>
                        {exp.mission[lang]}
                      </p>

                      {/* Technologies */}
                      {(exp.technologies || exp.languages) && (
                        <div className={`flex flex-wrap gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          {(exp.technologies || exp.languages || []).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-md bg-[#00D4FF]/10 text-[#00D4FF]/80 border border-[#00D4FF]/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tools */}
                      {exp.tools && (
                        <div className={`flex flex-wrap gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          {exp.tools.map((tool, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-md bg-[#00FFC8]/10 text-[#00FFC8]/80 border border-[#00FFC8]/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Database */}
                      {exp.database && (
                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                          {exp.database.map((db, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-md bg-[#39FF14]/10 text-[#39FF14]/80 border border-[#39FF14]/20"
                            >
                              {db}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlowCard>
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
