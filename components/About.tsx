'use client';

import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, Code2, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';
import GlassCardEnhanced from './GlassCardEnhanced';

interface AboutProps {
  lang: 'fr' | 'en';
}

export default function About({ lang }: AboutProps) {
  const data = portfolioData.about;
  const personal = portfolioData.personal;

  const stats = [
    { icon: Briefcase, value: '6+', label: lang === 'fr' ? 'Années d\'expérience' : 'Years of experience' },
    { icon: Code2, value: '20+', label: lang === 'fr' ? 'Technologies' : 'Technologies' },
    { icon: Award, value: '2', label: lang === 'fr' ? 'Certifications' : 'Certifications' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration - neutral */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-200/20 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
            {data.title[lang]}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-16" />
        </RevealOnScroll>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content - 3 columns */}
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left">
              <GlassCardEnhanced className="p-8 h-full" glow>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-2xl">
                    <User className="w-8 h-8 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                      {personal.name}
                    </h3>
                    <p className="text-slate-500/70">{personal.title[lang]}</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600/80 dark:text-slate-300/80 leading-relaxed mb-8">
                  {data.description[lang]}
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-300/30 dark:border-slate-600/30"
                    >
                      <stat.icon className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-700">{stat.value}</div>
                      <div className="text-xs text-slate-500/70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </GlassCardEnhanced>
            </RevealOnScroll>
          </div>
          
          {/* Contact info - 2 columns */}
          <div className="lg:col-span-2">
            <RevealOnScroll direction="right" delay={0.2}>
              <GlassCardEnhanced className="p-8 h-full" glow>
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-slate-400/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-slate-500" />
                  </span>
                  {lang === 'fr' ? 'Contact' : 'Contact'}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-300/30 dark:border-slate-600/30 hover:bg-slate-200/50 hover:border-slate-400/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400/80 uppercase tracking-wide">Email</div>
                      <div className="text-sm font-medium text-slate-600 group-hover:text-slate-700 transition-colors">{personal.email}</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-300/30 dark:border-slate-600/30">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400/80 uppercase tracking-wide">{lang === 'fr' ? 'Adresse' : 'Address'}</div>
                      <div className="text-sm font-medium text-slate-600">{personal.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-slate-300/30 dark:border-slate-600/30">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400/80 uppercase tracking-wide">{lang === 'fr' ? 'Téléphone' : 'Phone'}</div>
                      <div className="text-sm font-medium text-slate-600">{personal.phone}</div>
                    </div>
                  </div>
                </div>
              </GlassCardEnhanced>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
