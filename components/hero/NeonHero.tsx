'use client';

import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Link2, Mail, ChevronDown } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import NeonButton from '../ui/NeonButton';

interface NeonHeroProps {
  lang: 'fr' | 'en';
}

export default function NeonHero({ lang }: NeonHeroProps) {
  const data = portfolioData.hero;
  const personal = portfolioData.personal;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 200, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#00FFC8' : '#39FF14',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile Photo with Orbital Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 relative inline-block"
        >
          {/* Outer orbital ring */}
          <motion.div
            className="absolute inset-[-30px] rounded-full border border-[#00D4FF]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]" />
          </motion.div>

          {/* Inner orbital ring */}
          <motion.div
            className="absolute inset-[-15px] rounded-full border border-[#00FFC8]/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#00FFC8] shadow-[0_0_8px_#00FFC8]" />
          </motion.div>

          {/* Glow ring */}
          <div className="absolute inset-[-5px] rounded-full animate-pulse-glow-cyan opacity-50" />

          {/* Photo container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-[#00D4FF]/50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] to-[#161B22]" />
            <div className="w-full h-full flex items-center justify-center text-5xl md:text-6xl font-bold gradient-text-neon">
              PH
            </div>
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </div>
        </motion.div>

        {/* Greeting with typing effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-[#00D4FF]/80 font-medium mb-4 tracking-widest uppercase"
        >
          {data.greeting[lang]}
        </motion.p>

        {/* Name with neon glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="gradient-text-neon animate-text-glow">
            {data.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/80 mb-4"
        >
          {data.title[lang]}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
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
            { icon: GitBranch, href: personal.github, label: 'GitHub', color: '#00D4FF' },
            { icon: Link2, href: personal.linkedin, label: 'LinkedIn', color: '#00FFC8' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: '#39FF14' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group"
              style={{
                background: 'rgba(13, 17, 23, 0.8)',
                border: `1px solid ${social.color}30`,
              }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: social.color,
                boxShadow: `0 0 20px ${social.color}50`,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5 transition-colors" style={{ color: social.color }} />
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
          <NeonButton href="#projects" variant="primary" glowColor="cyan">
            {lang === 'fr' ? 'Voir mes projets' : 'View my projects'}
          </NeonButton>
          <NeonButton href="#contact" variant="secondary" glowColor="teal">
            {lang === 'fr' ? 'Me contacter' : 'Contact me'}
          </NeonButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/40 uppercase tracking-widest text-xs">
            {lang === 'fr' ? 'Scroll' : 'Scroll'}
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-[#00D4FF]/30 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-[#00D4FF]/20 rounded-tl-3xl" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-[#00FFC8]/20 rounded-tr-3xl" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-[#39FF14]/20 rounded-bl-3xl" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-[#00D4FF]/20 rounded-br-3xl" />
    </section>
  );
}
