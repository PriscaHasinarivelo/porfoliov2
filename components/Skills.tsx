'use client';

import { motion } from 'framer-motion';
import { Code, Database, GitBranch, Server, Wrench, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import RevealOnScroll from './RevealOnScroll';
import GlassCardEnhanced from './GlassCardEnhanced';
import SkillGraph from './SkillGraph';

interface SkillsProps {
  lang: 'fr' | 'en';
}

const iconMap: Record<string, React.ElementType> = {
  Langages: Code,
  Languages: Code,
  'Technologies Web': Layers,
  'Web Technologies': Layers,
  'Bases de données': Database,
  Databases: Database,
  Versioning: GitBranch,
  'Web Services': Server,
  Outils: Wrench,
  Tools: Wrench,
  Méthodologie: Code,
  Methodology: Code,
};

export default function Skills({ lang }: SkillsProps) {
  const skills = portfolioData.skills;

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations - neutral */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-r from-slate-200/15 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-20 right-10 text-slate-400/15 text-3xl font-light">+</div>
      <div className="absolute bottom-40 left-20 text-slate-300/20 text-2xl font-light">+</div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-slate-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text text-transparent">
              {lang === 'fr' ? 'Compétences' : 'Skills'}
            </h2>
            <Sparkles className="w-6 h-6 text-slate-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-300 mx-auto rounded-full mb-4" />
          <p className="text-center text-slate-500/70 mb-16 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'Expertise technique accumulée au fil des années de développement professionnel'
              : 'Technical expertise accumulated over years of professional development'}
          </p>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.category[lang]] || Code;
            return (
              <RevealOnScroll key={index} delay={index * 0.1} direction="up">
                <GlassCardEnhanced className="p-6 h-full" glow>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-xl">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
                      {category.category[lang]}
                    </h3>
                  </div>
                  
                  {/* Skills with animated lines */}
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <SkillGraph key={i} skill={skill} index={i} />
                    ))}
                  </div>
                </GlassCardEnhanced>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
