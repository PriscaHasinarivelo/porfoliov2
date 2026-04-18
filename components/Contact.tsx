'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link2, Globe, Send, MessageSquare, GitBranch } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';
import GlassCardEnhanced from './GlassCardEnhanced';
import GlowButton from './GlowButton';

interface ContactProps {
  lang: 'fr' | 'en';
}

export default function Contact({ lang }: ContactProps) {
  const contact = portfolioData.contact;
  const personal = portfolioData.personal;

  const contactItems = [
    { icon: Mail, label: lang === 'fr' ? 'Email' : 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'from-slate-500 to-slate-600' },
    { icon: Phone, label: lang === 'fr' ? 'Téléphone' : 'Phone', value: personal.phone, href: null, color: 'from-slate-400 to-slate-500' },
    { icon: MapPin, label: lang === 'fr' ? 'Adresse' : 'Address', value: personal.address, href: null, color: 'from-slate-500 to-slate-600' },
    { icon: Link2, label: 'LinkedIn', value: 'Prisca Hasinarivelo', href: personal.linkedin, color: 'from-slate-400 to-slate-500' },
    { icon: GitBranch, label: 'GitHub', value: '@PriscaHasinarivelo', href: personal.github, color: 'from-slate-500 to-slate-600' },
    { icon: Globe, label: lang === 'fr' ? 'Portfolio' : 'Portfolio', value: lang === 'fr' ? 'Voir le portfolio' : 'View portfolio', href: personal.portfolio, color: 'from-slate-400 to-slate-500' },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration - neutral */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-slate-200/10 to-transparent" />
      <div className="absolute top-20 right-20 w-40 h-40 border border-slate-300/20 rounded-full" />
      <div className="absolute bottom-40 left-40 w-20 h-20 border border-slate-400/20 rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-slate-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
              {contact.title[lang]}
            </h2>
            <MessageSquare className="w-6 h-6 text-slate-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-4" />
          <p className="text-center text-lg text-slate-500/70 dark:text-slate-300/70 mb-16 max-w-2xl mx-auto">
            {contact.subtitle[lang]}
          </p>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const CardWrapper = item.href ? motion.a : motion.div;
            const wrapperProps = item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {};
            
            return (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <CardWrapper
                  {...wrapperProps}
                  className="block"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GlassCardEnhanced className="p-6 h-full group cursor-pointer" glow>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-slate-400/20`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-500/70 uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-600 transition-colors">{item.value}</p>
                      </div>
                      {item.href && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-slate-500"
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                  </GlassCardEnhanced>
                </CardWrapper>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Call to action */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-slate-500/60 dark:text-slate-300/60 mb-6">
              {lang === 'fr' 
                ? 'Prête à collaborer sur votre prochain projet ?'
                : 'Ready to collaborate on your next project?'}
            </p>
            <GlowButton href={`mailto:${personal.email}`} variant="primary">
              <Mail className="w-5 h-5" />
              {lang === 'fr' ? 'Envoyer un email' : 'Send an email'}
            </GlowButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
