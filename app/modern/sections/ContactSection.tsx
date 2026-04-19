'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const { t } = useLanguage();
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
      console.error('Error details:', error?.text || error?.message || 'Unknown error');
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="section-panel flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="text-[#ffa101] font-medium tracking-wider text-sm">{t('contact.subtitle')}</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              {t('contact.title1')}
              <br />
              <span className="gradient-text-orange">{t('contact.title2')}</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-md">
              {t('contact.description')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffa101]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#ffa101]" />
              </div>
              <div>
                <div className="text-white/40 text-sm">{t('contact.info.email')}</div>
                <div className="text-white font-medium">priscahasinarivelo@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffa101]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#ffa101]" />
              </div>
              <div>
                <div className="text-white/40 text-sm">{t('contact.info.phone')}</div>
                <div className="text-white font-medium">+261 340 474 299</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffa101]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#ffa101]" />
              </div>
              <div>
                <div className="text-white/40 text-sm">{t('contact.info.location')}</div>
                <div className="text-white font-medium">Antananarivo, Madagascar</div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-3 pt-4">
            {['P', 'R', 'I', 'S', 'C', 'A'].map((letter, index) => (
              <motion.a
                key={letter}
                href={index === 0 ? 'https://github.com/PriscaHasinarivelo/' : index === 1 ? 'https://www.linkedin.com/in/prisca-hasinarivelo-13368b144/' : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-modern w-10 h-10"
                whileHover={{ y: -5, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="text-sm font-bold">{letter}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card-modern p-8"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-white mb-6"
          >
            {t('contact.form.title')}
          </motion.h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-white/60 text-sm mb-2 block">{t('contact.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  className="form-input-modern"
                  required
                />
              </div>
              <div>
                <label className="text-white/60 text-sm mb-2 block">{t('contact.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="form-input-modern"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="text-white/60 text-sm mb-2 block">{t('contact.form.subject')}</label>
              <input
                type="text"
                name="subject"
                placeholder={t('contact.form.subjectPlaceholder')}
                className="form-input-modern"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="text-white/60 text-sm mb-2 block">{t('contact.form.message')}</label>
              <textarea
                rows={4}
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                className="form-input-modern resize-none"
                required
              />
            </motion.div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Message envoyé avec succès !
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                Erreur lors de l&apos;envoi. Réessayez.
              </motion.div>
            )}

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isLoading}
              className="btn-modern w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? 'Envoi en cours...' : t('contact.form.send')}
              <Send className={`w-5 h-5 transition-transform ${isLoading ? '' : 'group-hover:translate-x-1'}`} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
