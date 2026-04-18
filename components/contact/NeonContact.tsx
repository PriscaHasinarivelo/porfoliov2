'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link2, GitBranch, Globe, Send, MessageSquare, Heart } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import GlowCard from '../ui/GlowCard';
import NeonButton from '../ui/NeonButton';

interface NeonContactProps {
  lang: 'fr' | 'en';
}

export default function NeonContact({ lang }: NeonContactProps) {
  const personal = portfolioData.personal;

  const contactItems = [
    { 
      icon: Mail, 
      label: lang === 'fr' ? 'Email' : 'Email', 
      value: personal.email, 
      href: `mailto:${personal.email}`, 
      color: '#00D4FF' 
    },
    { 
      icon: Phone, 
      label: lang === 'fr' ? 'Téléphone' : 'Phone', 
      value: personal.phone, 
      href: null, 
      color: '#00FFC8' 
    },
    { 
      icon: MapPin, 
      label: lang === 'fr' ? 'Adresse' : 'Address', 
      value: personal.address, 
      href: null, 
      color: '#39FF14' 
    },
    { 
      icon: Link2, 
      label: 'LinkedIn', 
      value: 'Prisca Hasinarivelo', 
      href: personal.linkedin, 
      color: '#0080FF' 
    },
    { 
      icon: GitBranch, 
      label: 'GitHub', 
      value: '@PriscaHasinarivelo', 
      href: personal.github, 
      color: '#B829DD' 
    },
    { 
      icon: Globe, 
      label: lang === 'fr' ? 'Portfolio' : 'Portfolio', 
      value: lang === 'fr' ? 'Voir le portfolio' : 'View portfolio', 
      href: personal.portfolio, 
      color: '#00D4FF' 
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#00D4FF]/5 blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[#00FFC8]/5 blur-[150px]" />
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
            <MessageSquare className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-[#00D4FF]">
              {lang === 'fr' ? 'Contact' : 'Contact'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-neon">
              {lang === 'fr' ? 'Travaillons Ensemble' : 'Let\'s Work Together'}
            </span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'N\'hésitez pas à me contacter pour discuter de vos projets ou opportunités.'
              : 'Feel free to contact me to discuss your projects or opportunities.'
            }
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const CardWrapper = item.href ? motion.a : motion.div;
            const wrapperProps = item.href ? { 
              href: item.href, 
              target: '_blank', 
              rel: 'noopener noreferrer' 
            } : {};
            
            const glowColors = ['cyan', 'teal', 'green', 'blue', 'purple', 'cyan'] as const;
            const glowColor = glowColors[index % glowColors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardWrapper
                  {...wrapperProps}
                  className="block h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GlowCard className="p-6 h-full group cursor-pointer" glowColor={glowColor} hoverScale={1}>
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors truncate">
                          {item.value}
                        </p>
                      </div>
                      {item.href && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-[#00D4FF]"
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                  </GlowCard>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GlowCard className="p-8 md:p-12 inline-block max-w-2xl w-full" glowColor="cyan">
            <p className="text-white/60 mb-6 text-lg">
              {lang === 'fr' 
                ? 'Prête à collaborer sur votre prochain projet ?'
                : 'Ready to collaborate on your next project?'
              }
            </p>
            <NeonButton 
              href={`mailto:${personal.email}`} 
              variant="primary" 
              glowColor="cyan"
              icon={<Mail className="w-5 h-5" />}
            >
              {lang === 'fr' ? 'Envoyer un email' : 'Send an email'}
            </NeonButton>
          </GlowCard>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo/Name */}
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #00FFC8)',
                  color: '#0A0A0F',
                }}
              >
                PH
              </div>
              <div>
                <p className="font-bold text-white">Prisca HASINARIVELO</p>
                <p className="text-sm text-white/50">{personal.title[lang]}</p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>© {new Date().getFullYear()}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                {lang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}
              </span>
              <Heart className="w-4 h-4 text-[#00D4FF]" />
            </div>
            
            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                color: '#00D4FF',
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'fr' ? 'Retour en haut' : 'Back to top'} ↑
            </motion.button>
          </div>
        </div>
      </footer>
    </section>
  );
}
