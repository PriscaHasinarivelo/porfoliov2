'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette, Server, Sparkles } from 'lucide-react';
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
    { name: 'JAVA', level: 85, icon: Server },
    { name: 'React', level: 70, icon: Code },
    { name: 'DevOps', level: 55, icon: Globe },
    { name: 'UI/UX Design', level: 70, icon: Palette },
    { name: 'AI Utils', level: 50, icon: Sparkles },
    { name: 'DataBase', level: 90, icon: Database },
  ] : [
    { name: 'JAVA', level: 85, icon: Server },
    { name: 'React', level: 70, icon: Code },
    { name: 'DevOps', level: 55, icon: Globe },
    { name: 'UI/UX Design', level: 70, icon: Palette },
    { name: 'AI Utils', level: 50, icon: Sparkles },
    { name: 'DataBase', level: 90, icon: Database },
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
              <div className="text-4xl font-bold gradient-text-orange">3</div>
              <div className="text-sm text-white/50">{lang === 'fr' ? 'Grands Projets' : 'Major Projects'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-orange">6</div>
              <div className="text-sm text-white/50">{lang === 'fr' ? 'Ans Exp.' : 'Years Exp.'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-orange">3</div>
              <div className="text-sm text-white/50">{lang === 'fr' ? 'Entreprises' : 'Companies'}</div>
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
