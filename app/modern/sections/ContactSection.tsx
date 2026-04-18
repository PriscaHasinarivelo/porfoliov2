'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
                <div className="text-white font-medium">prisca@example.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffa101]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#ffa101]" />
              </div>
              <div>
                <div className="text-white/40 text-sm">{t('contact.info.phone')}</div>
                <div className="text-white font-medium">+261 34 00 000 00</div>
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
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            {['Web', 'GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="social-icon-modern"
                whileHover={{ y: -5, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="text-xs font-medium">{social[0]}</span>
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

          <form className="space-y-5">
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-white/60 text-sm mb-2 block">{t('contact.form.name')}</label>
                <input
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  className="form-input-modern"
                />
              </div>
              <div>
                <label className="text-white/60 text-sm mb-2 block">{t('contact.form.email')}</label>
                <input
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="form-input-modern"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="text-white/60 text-sm mb-2 block">{t('contact.form.subject')}</label>
              <input
                type="text"
                placeholder={t('contact.form.subjectPlaceholder')}
                className="form-input-modern"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="text-white/60 text-sm mb-2 block">{t('contact.form.message')}</label>
              <textarea
                rows={4}
                placeholder={t('contact.form.messagePlaceholder')}
                className="form-input-modern resize-none"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="btn-modern w-full flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('contact.form.send')}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
