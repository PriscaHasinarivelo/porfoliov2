'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/lib/projects-data';
import ProjectCard from './ProjectCard';
import { Sparkles, Code2, Smartphone, Server } from 'lucide-react';

interface ProjectGridProps {
  lang: 'fr' | 'en';
  showFeaturedOnly?: boolean;
}

const categories = [
  { id: 'all', label: { fr: 'Tous', en: 'All' }, icon: Sparkles },
  { id: 'web', label: { fr: 'Web', en: 'Web' }, icon: Code2 },
  { id: 'mobile', label: { fr: 'Mobile', en: 'Mobile' }, icon: Smartphone },
  { id: 'backend', label: { fr: 'Backend', en: 'Backend' }, icon: Server },
];

export default function ProjectGrid({ lang, showFeaturedOnly = false }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = projects.filter(project => {
    if (showFeaturedOnly && !project.featured) return false;
    if (activeFilter !== 'all' && project.category !== activeFilter) return false;
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/5 blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#00FFC8]/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
            }}
          >
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-[#00D4FF]">
              {lang === 'fr' ? 'Portfolio' : 'Portfolio'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-neon">
              {lang === 'fr' ? 'Mes Projets' : 'My Projects'}
            </span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'Découvrez une sélection de mes projets récents, couvrant le développement web, mobile et backend.'
              : 'Discover a selection of my recent projects, covering web, mobile and backend development.'
            }
          </p>
        </motion.div>

        {/* Filter Tabs */}
        {!showFeaturedOnly && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeFilter === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]' 
                      : 'bg-[#161B22] text-white/60 border border-white/10 hover:border-[#00D4FF]/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.label[lang]}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              lang={lang} 
              index={index}
            />
          ))}
        </motion.div>

        {/* View All Link */}
        {showFeaturedOnly && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                color: '#00D4FF',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              }}
            >
              {lang === 'fr' ? 'Voir tous les projets' : 'View all projects'}
              <span>→</span>
            </motion.a>
          </motion.div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/40">
              {lang === 'fr' ? 'Aucun projet trouvé' : 'No projects found'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
