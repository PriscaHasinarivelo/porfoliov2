'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL.',
    year: '2024',
    image: 'EC',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure banking application with React Native and biometric auth.',
    year: '2023',
    image: 'MB',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics dashboard with D3.js and WebSocket integration.',
    year: '2023',
    image: 'AD',
  },
  {
    title: 'AI Chat Assistant',
    category: 'AI Integration',
    description: 'Intelligent chatbot with natural language processing capabilities.',
    year: '2024',
    image: 'AI',
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  
  const projects = lang === 'fr' ? [
    { title: 'Plateforme E-Commerce', category: 'Développement Web', description: 'Solution e-commerce full-stack avec React, Node.js et PostgreSQL.', year: '2024', image: 'EC' },
    { title: 'App Mobile Bancaire', category: 'Développement Mobile', description: 'Application bancaire sécurisée avec React Native et authentification biométrique.', year: '2023', image: 'MB' },
    { title: 'Tableau de Bord Analytics', category: 'Visualisation de Données', description: 'Tableau de bord temps réel avec D3.js et intégration WebSocket.', year: '2023', image: 'AD' },
    { title: 'Assistant Chat IA', category: 'Intégration IA', description: 'Chatbot intelligent avec capacités de traitement du langage naturel.', year: '2024', image: 'AI' },
  ] : projectsData;
  
  const experience = lang === 'fr' ? [
    { role: 'Développeuse Full Stack Senior', company: 'Tech Solutions Inc.', period: '2022 - Présent', description: 'Direction du développement d\'applications web enterprise' },
    { role: 'Développeuse Full Stack', company: 'Agence Digitale', period: '2020 - 2022', description: 'Construction d\'applications évolutives pour divers clients' },
    { role: 'Développeuse Junior', company: 'StartUp Hub', period: '2019 - 2020', description: 'Début du parcours en développement web' },
  ] : experienceData;
  
  return (
    <section className="section-panel flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#ffa101] font-medium tracking-wider text-sm">{t('projects.subtitle')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            {t('projects.title1')} <span className="gradient-text-orange">{t('projects.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Grid - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="project-card-modern group cursor-pointer p-6"
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffa101] to-[#ff7b35] flex items-center justify-center text-white font-bold text-lg">
                    {project.image}
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#ffa101]" />
                  </motion.div>
                </div>
                <span className="text-[#ffa101] text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mt-1 mb-2">{project.title}</h3>
                <p className="text-white/50 text-sm mb-4">{project.description}</p>
                <span className="text-white/30 text-xs">{project.year}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline - Takes 1 column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              {t('projects.experienceTitle')}
            </motion.h3>
            
            <div className="relative pl-6 border-l-2 border-[#ffa101]/20 space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#ffa101] border-4 border-[#31525b]" />
                  <div className="glass-card-modern p-4 hover:border-[#ffa101]/50 transition-colors">
                    <div className="flex items-center gap-2 text-[#ffa101] text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <p className="text-white/40 text-sm mt-2">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
