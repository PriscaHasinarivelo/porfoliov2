'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Palette, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
  { name: 'React / Next.js', level: 95, icon: Code },
  { name: 'Java / Spring Boot', level: 90, icon: Server },
  { name: 'Node.js / Express', level: 88, icon: Database },
  { name: 'Mobile / React Native', level: 85, icon: Smartphone },
  { name: 'UI/UX Design', level: 80, icon: Palette },
  { name: 'DevOps / Cloud', level: 75, icon: Globe },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const skillsLabels = lang === 'fr' ? [
    { name: 'React / Next.js', level: 95, icon: Code },
    { name: 'Java / Spring Boot', level: 90, icon: Server },
    { name: 'Node.js / Express', level: 88, icon: Database },
    { name: 'Mobile / React Native', level: 85, icon: Smartphone },
    { name: 'UI/UX Design', level: 80, icon: Palette },
    { name: 'DevOps / Cloud', level: 75, icon: Globe },
  ] : [
    { name: 'React / Next.js', level: 95, icon: Code },
    { name: 'Java / Spring Boot', level: 90, icon: Server },
    { name: 'Node.js / Express', level: 88, icon: Database },
    { name: 'Mobile / React Native', level: 85, icon: Smartphone },
    { name: 'UI/UX Design', level: 80, icon: Palette },
    { name: 'DevOps / Cloud', level: 75, icon: Globe },
  ];
  
  return (
    <section className="section-panel flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - About Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <span className="text-[#ffa101] font-medium tracking-wider text-sm">{t('about.subtitle')}</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              {t('about.title1')}
              <br />
              <span className="gradient-text-orange">{t('about.title2')}</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg leading-relaxed"
          >
            {t('about.description1')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white/60 leading-relaxed"
          >
            {t('about.description2')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-8 pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-orange">50+</div>
              <div className="text-sm text-white/50">{t('about.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-orange">5+</div>
              <div className="text-sm text-white/50">{t('about.stats.years')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-orange">30+</div>
              <div className="text-sm text-white/50">{t('about.stats.clients')}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-white"
          >
            {t('about.skillsTitle')}
          </motion.h3>

          <div className="space-y-5">
            {skillsLabels.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ffa101]/10 flex items-center justify-center">
                      <skill.icon className="w-5 h-5 text-[#ffa101]" />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-[#ffa101] font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating skill icons */}
          <div className="relative h-32 mt-8">
            {[Code, Database, Globe].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute w-14 h-14 rounded-xl glass-card-modern flex items-center justify-center"
                style={{
                  left: `${i * 35}%`,
                  top: i % 2 === 0 ? '0' : '40px',
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <Icon className="w-6 h-6 text-[#ffa101]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
