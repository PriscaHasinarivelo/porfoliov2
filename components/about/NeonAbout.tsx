'use client';

import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, Code2, Briefcase, Award, Download } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlowCard from '../ui/GlowCard';
import NeonButton from '../ui/NeonButton';

interface NeonAboutProps {
  lang: 'fr' | 'en';
}

export default function NeonAbout({ lang }: NeonAboutProps) {
  const data = portfolioData.about;
  const personal = portfolioData.personal;

  const stats = [
    { icon: Briefcase, value: '6+', label: lang === 'fr' ? 'Années d\'expérience' : 'Years of experience', color: '#00D4FF' },
    { icon: Code2, value: '20+', label: lang === 'fr' ? 'Technologies' : 'Technologies', color: '#00FFC8' },
    { icon: Award, value: '2', label: lang === 'fr' ? 'Certifications' : 'Certifications', color: '#39FF14' },
  ];

  const contactItems = [
    { icon: Mail, value: personal.email, href: `mailto:${personal.email}`, color: '#00D4FF' },
    { icon: MapPin, value: personal.address, color: '#00FFC8' },
    { icon: Phone, value: personal.phone, color: '#39FF14' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/5 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#00FFC8]/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
            }}
          >
            <User className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-[#00D4FF]">
              {lang === 'fr' ? 'À propos' : 'About'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-neon">
              {data.title[lang]}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-8 h-full" glowColor="cyan">
                {/* Profile header */}
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'rgba(0, 212, 255, 0.1)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                    }}
                  >
                    <User className="w-8 h-8 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {personal.name}
                    </h3>
                    <p className="text-[#00FFC8]">{personal.title[lang]}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {data.description[lang]}
                </p>

                {/* Additional description from personal.about */}
                <p className="text-white/60 leading-relaxed mb-8">
                  {personal.about[lang]}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-xl"
                      style={{
                        background: 'rgba(13, 17, 23, 0.8)',
                        border: `1px solid ${stat.color}30`,
                      }}
                    >
                      <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
                      <div className="text-2xl font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlowCard className="p-8 h-full" glowColor="teal">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(0, 255, 200, 0.1)',
                      border: '1px solid rgba(0, 255, 200, 0.3)',
                    }}
                  >
                    <Mail className="w-5 h-5 text-[#00FFC8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {lang === 'fr' ? 'Contact' : 'Contact'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02]"
                          style={{
                            background: 'rgba(13, 17, 23, 0.8)',
                            border: `1px solid ${item.color}20`,
                          }}
                        >
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              background: `${item.color}15`,
                            }}
                          >
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div>
                            <div className="text-xs text-white/40 uppercase tracking-wide">{item.icon.name}</div>
                            <div className="text-sm font-medium text-white group-hover:text-[#00D4FF] transition-colors">
                              {item.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div 
                          className="flex items-center gap-4 p-4 rounded-xl"
                          style={{
                            background: 'rgba(13, 17, 23, 0.8)',
                            border: `1px solid ${item.color}20`,
                          }}
                        >
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              background: `${item.color}15`,
                            }}
                          >
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div>
                            <div className="text-xs text-white/40 uppercase tracking-wide">{item.icon.name}</div>
                            <div className="text-sm font-medium text-white">{item.value}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <NeonButton 
                    href={`mailto:${personal.email}`} 
                    variant="primary" 
                    glowColor="cyan"
                    className="w-full justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    {lang === 'fr' ? 'Envoyer un email' : 'Send an email'}
                  </NeonButton>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
