'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Palette, Server, Terminal, Cpu, Cloud } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skillsData = [
  {
    category: 'Frontend',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: '#00D4FF',
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express'],
    color: '#7B61FF',
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Android', 'iOS'],
    color: '#00FF94',
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: '#F59E0B',
  },
  {
    category: 'DevOps',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'AWS'],
    color: '#EC4899',
  },
  {
    category: 'Tools',
    icon: Terminal,
    skills: ['Git', 'Jenkins', 'Figma'],
    color: '#06B6D4',
  },
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

export default function SkillsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1A]" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#00D4FF 1px, transparent 1px),
              linear-gradient(90deg, #00D4FF 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
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
            {t.skills.subtitle}
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6">
            <span className="text-white">{t.skills.title}</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group glass-card-electric rounded-2xl p-6 hover:border-[#00D4FF]/50 transition-all cursor-hover"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors group-hover:border-white/20"
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        color: 'rgba(255,255,255,0.7)',
                        borderColor: 'rgba(255,255,255,0.08)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="mt-4 h-1 rounded-full overflow-hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ backgroundColor: category.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}