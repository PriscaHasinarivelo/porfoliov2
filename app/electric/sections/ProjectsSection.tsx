'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL.',
    year: '2024',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure banking application with React Native and biometric auth.',
    year: '2023',
    tech: ['React Native', 'TypeScript'],
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics dashboard with D3.js and WebSocket integration.',
    year: '2023',
    tech: ['D3.js', 'WebSocket', 'React'],
  },
  {
    title: 'AI Chat Assistant',
    category: 'AI Integration',
    description: 'Intelligent chatbot with natural language processing capabilities.',
    year: '2024',
    tech: ['OpenAI', 'Express', 'MongoDB'],
  },
];

const projectsFR = [
  { title: 'Plateforme E-Commerce', category: 'Développement Web', description: 'Solution e-commerce full-stack avec React, Node.js et PostgreSQL.', year: '2024', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { title: 'App Mobile Bancaire', category: 'Développement Mobile', description: 'Application bancaire sécurisée avec React Native et authentification biométrique.', year: '2023', tech: ['React Native', 'TypeScript'] },
  { title: 'Tableau de Bord Analytics', category: 'Visualisation de Données', description: 'Tableau de bord temps réel avec D3.js et intégration WebSocket.', year: '2023', tech: ['D3.js', 'WebSocket', 'React'] },
  { title: 'Assistant Chat IA', category: 'Intégration IA', description: 'Chatbot intelligent avec capacités de traitement du langage naturel.', year: '2024', tech: ['OpenAI', 'Express', 'MongoDB'] },
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

export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  
  const projects = lang === 'fr' ? projectsFR : projectsData;

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden">
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
            {t.projects.subtitle}
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
            <span className="text-white">{t.projects.title1}</span>
            <br />
            <span className="gradient-text-electric">{t.projects.title2}</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative glass-card-electric rounded-2xl p-6 cursor-hover overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-[#7B61FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] flex items-center justify-center text-white font-bold text-sm">
                    {project.title.substring(0, 2).toUpperCase()}
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#00D4FF]" />
                  </motion.div>
                </div>
                
                <span className="text-[#00D4FF] text-xs font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/30 text-xs">{project.year}</span>
                  <span className="text-[#00D4FF] text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {lang === 'fr' ? 'Voir plus' : 'View more'}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF] to-[#7B61FF]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="btn-electric cursor-hover">
            {t.projects.viewAll}
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}