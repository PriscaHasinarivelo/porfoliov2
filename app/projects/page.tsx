'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Code2, Smartphone, Server, Grid3X3, List } from 'lucide-react';
import { projects, Project } from '@/lib/projects-data';
import ProjectCard from '@/components/projects/ProjectCard';
import GlowCard from '@/components/ui/GlowCard';
import NeonButton from '@/components/ui/NeonButton';

const categories = [
  { id: 'all', label: { fr: 'Tous les projets', en: 'All projects' }, icon: Sparkles },
  { id: 'web', label: { fr: 'Applications Web', en: 'Web Applications' }, icon: Code2 },
  { id: 'mobile', label: { fr: 'Applications Mobile', en: 'Mobile Applications' }, icon: Smartphone },
  { id: 'backend', label: { fr: 'Backend & API', en: 'Backend & API' }, icon: Server },
];

export default function ProjectsPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-[#00D4FF] transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{lang === 'fr' ? 'Retour' : 'Back'}</span>
          </motion.a>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1 rounded-full text-sm bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF]"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
              }}
            >
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm text-[#00D4FF]">Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text-neon">
                {lang === 'fr' ? 'Tous mes Projets' : 'All My Projects'}
              </span>
            </h1>
            
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {lang === 'fr' 
                ? 'Une collection complète de mes réalisations en développement web, mobile et backend.'
                : 'A complete collection of my work in web, mobile and backend development.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sticky top-20 z-40 bg-[#0A0A0F]/80 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeFilter === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
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
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
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

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/40 text-lg">
                {lang === 'fr' ? 'Aucun projet trouvé dans cette catégorie.' : 'No projects found in this category.'}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <GlowCard className="p-8 md:p-12 text-center" glowColor="cyan">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text-neon">
                {lang === 'fr' ? 'Intéressé par une collaboration ?' : 'Interested in collaborating?'}
              </span>
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              {lang === 'fr' 
                ? 'Je suis toujours ouverte aux nouveaux projets et opportunités.'
                : 'I am always open to new projects and opportunities.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="mailto:priscahasinarivelo@gmail.com" variant="primary" glowColor="cyan">
                {lang === 'fr' ? 'Me contacter' : 'Contact me'}
              </NeonButton>
              <NeonButton href="/" variant="secondary" glowColor="teal">
                {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
              </NeonButton>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Prisca HASINARIVELO. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
