'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const experienceData = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Built scalable applications for diverse clients',
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2019 - 2020',
    description: 'Started journey in web development',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function ExperienceSection() {
  const { t, lang } = useLanguage();
  
  const experience = lang === 'fr' ? [
    { role: 'Développeuse Full Stack Senior', company: 'Tech Solutions Inc.', period: '2022 - Présent', description: 'Direction du développement d\'applications web enterprise' },
    { role: 'Développeuse Full Stack', company: 'Agence Digitale', period: '2020 - 2022', description: 'Construction d\'applications évolutives pour divers clients' },
    { role: 'Développeuse Junior', company: 'StartUp Hub', period: '2019 - 2020', description: 'Début du parcours en développement web' },
  ] : experienceData;

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden">
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
            {t.experience.subtitle}
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
            <span className="text-white">{t.experience.title}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-transparent hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="space-y-8 lg:space-y-0">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative lg:grid lg:grid-cols-2 gap-8 lg:gap-20"
              >
                <motion.div
                  variants={itemVariants}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:order-3'}`}
                >
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#0A0F1A] z-10" />
                  
                  <div className="lg:hidden absolute left-8 w-3 h-3 rounded-full bg-[#00D4FF]" />
                  
                  <div className="glass-card-electric rounded-2xl p-6 ml-8 lg:ml-0 w-full max-w-md hover:border-[#00D4FF]/50 transition-colors group cursor-hover">
                    <div className="flex items-center gap-2 text-[#00D4FF] text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <p className="text-white/50 text-sm">{exp.description}</p>
                    
                    <div className="flex items-center gap-2 mt-4 text-[#00D4FF] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>{lang === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                <div className={`lg:block ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}