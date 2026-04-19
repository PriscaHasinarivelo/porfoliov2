'use client';

import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_33zjx9o',
        'template_vyjpq2n',
        formRef.current,
        '7Whawi2tv9mv5v3cT'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1A]" />
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(123, 97, 255, 0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-electric text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            {t.contact.subtitle}
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
            <span className="text-white">{t.contact.title}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-white/60 max-w-md">
              {lang === 'fr' 
                ? 'N\'hésitez pas à me contacter pour collaborer sur vos projets ou simplement pour échanger.' 
                : 'Feel free to contact me to collaborate on your projects or just to chat.'
              }
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:priscahasinarivelo@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card-electric cursor-hover group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">{t.contact.emailLabel}</div>
                  <div className="text-white font-medium">priscahasinarivelo@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/prisca-hasinarivelo-13368b144/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card-electric cursor-hover group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00D4FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm">{t.contact.linkedinLabel}</div>
                  <div className="text-white font-medium">Prisca Hasinarivelo</div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/PriscaHasinarivelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card-electric cursor-hover group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00D4FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm">{t.contact.githubLabel}</div>
                  <div className="text-white font-medium">PriscaHasinarivelo</div>
                </div>
              </motion.a>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl glass-card-electric">
              <MapPin className="w-5 h-5 text-[#00D4FF]" />
              <span className="text-white/70">
                {lang === 'fr' ? 'Alarobia, Antananarivo, Madagascar' : 'Alarobia, Antananarivo, Madagascar'}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card-electric rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/70 text-sm">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/70 text-sm">{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors"
                    placeholder={lang === 'fr' ? 'votre@email.com' : 'your@email.com'}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/70 text-sm">{lang === 'fr' ? 'Sujet' : 'Subject'}</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors"
                  placeholder={lang === 'fr' ? 'Discussion de projet' : 'Project discussion'}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/70 text-sm">{t.contact.message}</label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00D4FF] focus:outline-none transition-colors resize-none"
                  placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'}
                  required
                />
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  {lang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!'}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {lang === 'fr' ? 'Erreur lors de l\'envoi. Réessayez.' : 'Error sending. Please try again.'}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                className="btn-electric w-full flex items-center justify-center gap-2 cursor-hover disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...') : t.contact.send}
                <Send className={`w-5 h-5 ${isLoading ? '' : 'group-hover:translate-x-1'}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}