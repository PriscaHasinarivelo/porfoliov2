'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  onNavigate?: (index: number) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t, lang } = useLanguage();
  return (
    <section className="section-panel flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#fae6b1] font-medium tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('hero.hello')}
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('hero.im')} <span className="gradient-text-orange">{t('hero.role')}</span>
            <br />
            <span className="text-white">{t('hero.role2')}</span>
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              onClick={() => onNavigate?.(1)}
              className="btn-modern flex items-center gap-2 group"
            >
              {t('hero.discover')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate?.(2)}
              className="w-12 h-12 rounded-full border-2 border-[#ffa101] flex items-center justify-center text-[#ffa101] hover:bg-[#ffa101] hover:text-[#31525b] transition-all"
            >
              <ArrowRight className="w-5 h-5 -rotate-45" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-white/40 text-sm">{t('hero.followMe')}</span>
            <div className="flex gap-3">
              <a 
                href="https://github.com/PriscaHasinarivelo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-modern" 
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/prisca-hasinarivelo-13368b144/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-modern" 
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo with Orbit Stats */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[500px] h-[500px] rounded-full border-2 border-dashed border-[#ffa101]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full border border-[#fae6b1]/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full border border-[#b3dee5]/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Central Photo */}
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-[#ffa101] to-[#ff7b35] p-1 pulse-orange"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/asset/img/photo d'identité.jpeg"
                  alt="Prisca"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Orbiting Stats */}
          {/* Card 1: Top-left - Major Complex Projects */}
          <motion.div
            className="absolute top-2 left-2 lg:top-4 lg:-left-4 stat-card"
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 4, 0],
              x: [0, 6, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-5 h-5 rounded bg-[#ffa101]/30 flex items-center justify-center border border-[#ffa101]/50">
                <svg className="w-3 h-3 text-[#ffa101]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-[#ffa101]">3</div>
            <div className="text-xs text-[#ffa101] font-semibold">{lang === 'fr' ? 'Grands Projets' : 'Major Projects'}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wide">{lang === 'fr' ? 'Complexes' : 'Complex'}</div>
          </motion.div>

          {/* Card 2: Bottom-left - Major Companies */}
          <motion.div
            className="absolute bottom-12 left-2 lg:bottom-16 lg:-left-2 stat-card"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -3, 0],
              x: [0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-5 h-5 rounded bg-[#ffa101]/30 flex items-center justify-center border border-[#ffa101]/50">
                <svg className="w-3 h-3 text-[#ffa101]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-[#ffa101]">3</div>
            <div className="text-xs text-[#ffa101] font-semibold">{lang === 'fr' ? 'Grandes Entreprises' : 'Major Companies'}</div>
          </motion.div>

          {/* Card 3: Right side centered - Years Experience with stars */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 stat-card"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 2, 0],
              x: [0, 4, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex gap-0.5 mb-1 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-3 h-3 text-[#ffa101]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-2xl font-bold text-[#ffa101]">6 {lang === 'fr' ? 'Ans' : 'Years'}</div>
            <div className="text-xs text-white/60">{t('stats.experience')}</div>
          </motion.div>

          {/* Floating shapes near photo */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-[#ffa101]/20 rotate-12"
            animate={{ 
              rotate: [12, 25, 12],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 -left-8 w-8 h-8 rounded-full border-2 border-[#fae6b1]/40"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
