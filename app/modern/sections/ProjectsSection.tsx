'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projectsData = [
  {
    title: 'CRM Billing - TELCO OI',
    titleFr: 'CRM Billing - TELCO OI',
    company: 'YAS Madagascar',
    category: 'Enterprise Application',
    categoryFr: 'Application Enterprise',
    description: 'CRM billing system development in Scala for TELCO group.',
    descriptionFr: 'Développement d\'un système de facturation CRM en Scala pour le groupe TELCO.',
    year: '2025–2026',
    image: 'CB',
  },
  {
    title: 'Statistical Dashboard',
    titleFr: 'Tableau de bord statistique',
    company: 'Instat Toamasina',
    category: 'Data Visualization',
    categoryFr: 'Visualisation de données',
    description: 'Data visualization dashboard developed with JavaScript and CodeIgniter.',
    descriptionFr: 'Développement d\'un tableau de bord de visualisation de données statistiques avec JavaScript et CodeIgniter.',
    year: '2017',
    image: 'ST',
  },
  {
    title: 'Pension Management',
    titleFr: 'Gestion des pensions',
    company: 'FUNRECO',
    category: 'Enterprise Application',
    categoryFr: 'Application Enterprise',
    description: 'Pension management application developed with JSF.',
    descriptionFr: 'Application de gestion des pensions développée avec JSF.',
    year: '2019',
    image: 'PN',
  },
  {
    title: 'Commercial Management',
    titleFr: 'Gestion commerciale',
    company: 'EASY PARK',
    category: 'Web Development',
    categoryFr: 'Développement Web',
    description: 'Commercial management system with Laravel and AngularJS.',
    descriptionFr: 'Système de gestion commerciale avec Laravel et AngularJS.',
    year: '2019',
    image: 'CM',
  },
  {
    title: 'Housing Management',
    titleFr: 'Gestion de logement',
    company: 'SOPRASTERIA',
    category: 'Enterprise Application',
    categoryFr: 'Application Enterprise',
    description: 'Enterprise application with Java Spring and Java RCP for housing management.',
    descriptionFr: 'Application d\'entreprise avec Java Spring et Java RCP pour la gestion de logements.',
    year: '2020–2024',
    image: 'ERP',
  },
];

const experienceData = [
  {
    role: 'Développeur JAVA/Scala',
    roleEn: 'JAVA/Scala Developer',
    company: 'YAS Madagascar – TELCO OI La Réunion – Group AXIAN',
    period: 'Mai 2025 – Aujourd\'hui',
    periodEn: 'May 2025 – Present',
    description: 'Développement d\'applications JAVA/Scala pour le groupe TELCO',
    descriptionEn: 'Development of JAVA/Scala applications for TELCO group',
  },
  {
    role: 'Ingénieur d\'étude et de développement',
    roleEn: 'Software Engineer',
    company: 'SNEDAMADA / Soprasteria Nantes',
    period: 'Mars 2020 – Juin 2024',
    periodEn: 'Mar 2020 – Jun 2024',
    description: 'Conception et développement de solutions d\'entreprise',
    descriptionEn: 'Design and development of enterprise solutions',
  },
  {
    role: 'Développeur Junior',
    roleEn: 'Junior Developer',
    company: 'EASY PARK / FUNRECO',
    period: 'Mars 2019 – Janvier 2020',
    periodEn: 'Mar 2019 – Jan 2020',
    description: 'Première expérience en développement web',
    descriptionEn: 'First experience in web development',
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
    { title: 'CRM Billing - TELCO OI', category: 'Application Enterprise', company: 'YAS Madagascar', description: 'Développement d\'un système de facturation CRM en Scala pour le groupe TELCO.', year: '2025–2026', image: 'CB' },
    { title: 'Tableau de bord statistique', category: 'Visualisation de données', company: 'Instat Toamasina', description: 'Développement d\'un tableau de bord de visualisation de données statistiques avec JavaScript et CodeIgniter.', year: '2017', image: 'ST' },
    { title: 'Gestion des pensions', category: 'Application Enterprise', company: 'FUNRECO', description: 'Application de gestion des pensions développée avec JSF.', year: '2019', image: 'PN' },
    { title: 'Gestion commerciale', category: 'Développement Web', company: 'EASY PARK', description: 'Système de gestion commerciale avec Laravel et AngularJS.', year: '2019', image: 'CM' },
    { title: 'Gestion de logement', category: 'Application Enterprise', company: 'SOPRASTERIA', description: 'Application d\'entreprise avec Java Spring et Java RCP pour la gestion de logements.', year: '2020–2024', image: 'ERP' },
  ] : [
    { title: 'CRM Billing - TELCO OI', category: 'Enterprise Application', company: 'YAS Madagascar', description: 'CRM billing system development in Scala for TELCO group.', year: '2025–2026', image: 'CB' },
    { title: 'Statistical Dashboard', category: 'Data Visualization', company: 'Instat Toamasina', description: 'Data visualization dashboard developed with JavaScript and CodeIgniter.', year: '2017', image: 'ST' },
    { title: 'Pension Management', category: 'Enterprise Application', company: 'FUNRECO', description: 'Pension management application developed with JSF.', year: '2019', image: 'PN' },
    { title: 'Commercial Management', category: 'Web Development', company: 'EASY PARK', description: 'Commercial management system with Laravel and AngularJS.', year: '2019', image: 'CM' },
    { title: 'Housing Management', category: 'Enterprise Application', company: 'SOPRASTERIA', description: 'Enterprise application with Java Spring and Java RCP for housing management.', year: '2020–2024', image: 'ERP' },
  ];
  
  const experience = lang === 'fr' ? [
    { role: 'Développeur JAVA/Scala', company: 'YAS Madagascar – TELCO OI La Réunion – Group AXIAN', period: 'Mai 2025 – Aujourd\'hui', description: 'Développement d\'applications JAVA/Scala pour le groupe TELCO' },
    { role: 'Ingénieur d\'étude et de développement', company: 'SNEDAMADA / Soprasteria Nantes', period: 'Mars 2020 – Juin 2024', description: 'Conception et développement de solutions d\'entreprise' },
    { role: 'Développeur Junior', company: 'EASY PARK / FUNRECO', period: 'Mars 2019 – Janvier 2020', description: 'Première expérience en développement web' },
  ] : [
    { role: 'JAVA/Scala Developer', company: 'YAS Madagascar – TELCO OI La Réunion – Group AXIAN', period: 'May 2025 – Present', description: 'Development of JAVA/Scala applications for TELCO group' },
    { role: 'Software Engineer', company: 'SNEDAMADA / Soprasteria Nantes', period: 'Mar 2020 – Jun 2024', description: 'Design and development of enterprise solutions' },
    { role: 'Junior Developer', company: 'EASY PARK / FUNRECO', period: 'Mar 2019 – Jan 2020', description: 'First experience in web development' },
  ];
  
  return (
    <section className="section-panel flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#ffa101] font-medium tracking-wider text-sm block mb-3">{t('projects.subtitle')}</span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t('projects.title1')} <span className="gradient-text-orange">{t('projects.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Grid - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="project-card-modern group cursor-pointer p-4"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ffa101] to-[#ff7b35] flex items-center justify-center text-white font-bold text-sm">
                    {project.image}
                  </div>
                  <motion.div
                    className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#ffa101]" />
                  </motion.div>
                </div>
                <span className="text-[#ffa101] text-xs font-medium">{project.category}</span>
                <h3 className="text-sm font-semibold text-white mt-1 mb-1 leading-tight">{project.title}</h3>
                <p className="text-white/50 text-xs mb-2 line-clamp-2">{project.description}</p>
                <span className="text-white/30 text-[10px]">{project.year}</span>
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
