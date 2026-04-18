'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, Trophy } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';
import GlassCardEnhanced from './GlassCardEnhanced';

interface CertificatesProps {
  lang: 'fr' | 'en';
}

export default function Certificates({ lang }: CertificatesProps) {
  const certificates = portfolioData.certificates;

  return (
    <section id="certificates" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration - neutral */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-slate-200/10 to-slate-300/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-slate-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
              {lang === 'fr' ? 'Certificats' : 'Certificates'}
            </h2>
            <Trophy className="w-6 h-6 text-slate-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-16" />
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GlassCardEnhanced className="p-8 group cursor-pointer" glow>
                  <div className="flex items-start gap-5">
                    {/* Certificate icon */}
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-2xl flex-shrink-0 group-hover:from-slate-400/30 group-hover:to-slate-500/30 transition-all"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Shield className="w-8 h-8 text-slate-600" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-semibold text-slate-500/70 uppercase tracking-wide">
                          {lang === 'fr' ? 'Certification' : 'Certification'}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 group-hover:text-slate-600 transition-colors">
                        {cert.name}
                      </h3>
                      
                      {/* View link with arrow animation */}
                      <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-400 transition-colors">
                        <span className="text-sm font-medium">
                          {lang === 'fr' ? 'Voir le certificat' : 'View certificate'}
                        </span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 border-t-2 border-r-2 border-slate-400/30 rounded-tr-lg" />
                    </div>
                  </div>
                </GlassCardEnhanced>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
