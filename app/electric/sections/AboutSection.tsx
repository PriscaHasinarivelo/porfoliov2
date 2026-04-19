'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Palette, Server, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
  { name: 'JAVA', level: 85, icon: Server },
  { name: 'React', level: 70, icon: Code },
  { name: 'DevOps', level: 55, icon: Globe },
  { name: 'UI/UX Design', level: 70, icon: Palette },
  { name: 'AI Utils', level: 50, icon: Sparkles },
  { name: 'DataBase', level: 90, icon: Database },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1A]" />
      
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
            {t.about.subtitle}
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
            <span className="text-white">{t.about.title1}</span>
            <br />
            <span className="gradient-text-electric">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-lg text-white/70 leading-relaxed">
              {t.about.description1}
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed">
              {t.about.description2}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-6">
              <div className="glass-card-electric rounded-2xl p-6 text-center min-w-[120px]">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-3">
                  <Server className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div className="text-sm text-white/60 mt-1">JAVA</div>
              </div>
              <div className="glass-card-electric rounded-2xl p-6 text-center min-w-[120px]">
                <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-[#7B61FF]" />
                </div>
                <div className="text-sm text-white/60 mt-1">{lang === 'fr' ? 'Base de données' : 'Database'}</div>
              </div>
              <div className="glass-card-electric rounded-2xl p-6 text-center min-w-[120px]">
                <div className="w-12 h-12 rounded-xl bg-[#00FF94]/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#00FF94]" />
                </div>
                <div className="text-sm text-white/60 mt-1">Agile</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-6">
              {t.about.skillsTitle}
            </motion.h3>

            <div className="space-y-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl glass-card-electric flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[#00D4FF] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}