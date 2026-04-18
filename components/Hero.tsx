'use client';

import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Link2, Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlowButton from './GlowButton';
import AnimatedBackground from './AnimatedBackground';

interface HeroProps {
  lang: 'fr' | 'en';
}

export default function Hero({ lang }: HeroProps) {
  const data = portfolioData.hero;
  const personal = portfolioData.personal;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <AnimatedBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Profile Photo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            
            {/* Photo container */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white/80 shadow-2xl shadow-slate-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-slate-300/20" />
              {/* Placeholder for Prisca's photo - replace src with actual photo path */}
              <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white text-4xl font-bold">
                PH
              </div>
            </div>
            
            {/* Floating decorative elements around photo - neutral tones */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-400/40 rounded-full"
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-1 -left-3 w-4 h-4 border-2 border-slate-300/50 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-500 font-medium mb-4 tracking-wide"
        >
          {data.greeting[lang]}
        </motion.p>
        
        {/* Name with gradient - keeping blue as main accent */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent">
            {data.name}
          </span>
        </motion.h1>
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-3xl lg:text-4xl font-semibold text-slate-600/90 dark:text-slate-300 mb-4"
        >
          {data.title[lang]}
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl text-slate-500/70 dark:text-slate-400/60 mb-10 max-w-2xl mx-auto"
        >
          {data.subtitle[lang]}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {[
            { icon: GitBranch, href: personal.github, label: 'GitHub' },
            { icon: Link2, href: personal.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-300/40 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-white/80 hover:border-slate-400/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <GlowButton href="#experience" variant="primary">
            {data.cta[lang]}
          </GlowButton>
          <GlowButton href="#contact" variant="secondary">
            {lang === 'fr' ? 'Me contacter' : 'Contact me'}
          </GlowButton>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-slate-400/60">{lang === 'fr' ? 'Scroll' : 'Scroll'}</span>
          <div className="w-8 h-12 rounded-full border-2 border-slate-400/30 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-slate-400/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
