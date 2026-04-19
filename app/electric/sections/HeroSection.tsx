'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import CircuitBackground from '../components/CircuitBackground';

export default function HeroSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      <CircuitBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-electric"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
              <span className="text-sm text-white/70">{t.hero.hello}</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-white">{t.hero.role}</span>
              {t.hero.role2 && (
                <>
                  <br />
                  <span className="gradient-text-electric">{t.hero.role2}</span>
                </>
              )}
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-white/60 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-electric flex items-center gap-2 group cursor-hover"
              >
                {t.hero.discover}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <motion.a
                href="https://www.linkedin.com/in/prisca-hasinarivelo-13368b144/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card-electric flex items-center justify-center text-white/70 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all cursor-hover"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
              <motion.a
                href="https://github.com/PriscaHasinarivelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card-electric flex items-center justify-center text-white/70 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all cursor-hover"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </motion.a>
              <motion.a
                href="mailto:priscahasinarivelo@gmail.com"
                className="w-12 h-12 rounded-xl glass-card-electric flex items-center justify-center text-white/70 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all cursor-hover"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text-electric">3</div>
                <div className="text-sm text-white/50">{t.about.stats.projects}</div>
                <div className="text-xs text-white/30">{lang === 'fr' ? 'Complexes' : 'Complex'}</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text-electric">6</div>
                <div className="text-sm text-white/50">{t.about.stats.years}</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text-electric">3</div>
                <div className="text-sm text-white/50">{t.about.stats.clients}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#00D4FF" strokeWidth="1" strokeDasharray="10 20" opacity="0.3" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="#00D4FF" strokeWidth="1" strokeDasharray="5 15" opacity="0.2" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute inset-8 rounded-full border-2 border-[#7B61FF]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute inset-16 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#00FF94" strokeWidth="1" strokeDasharray="20 30" opacity="0.2" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden glass-card-electric p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/asset/img/photo d'identité.jpeg"
                      alt="Prisca"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-linear-to-t from-[#0A0F1A]/50 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card-electric flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-center">
                  <Globe className="w-8 h-8 text-[#00D4FF] mx-auto mb-1" />
                  <span className="text-xs text-white/60">React</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl glass-card-electric flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#7B61FF] block">Java</span>
                  <span className="text-xs text-white/60">Spring</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[#00D4FF]/30 flex justify-center p-2"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}