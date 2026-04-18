'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Code2, Database, Globe, GitBranch, Wrench, Layers } from 'lucide-react';

interface SkillConstellationProps {
  lang: 'fr' | 'en';
}

const categoryIcons: Record<string, React.ElementType> = {
  'Langages': Code2,
  'Languages': Code2,
  'Technologies Web': Globe,
  'Web Technologies': Globe,
  'Bases de données': Database,
  'Databases': Database,
  'Versioning': GitBranch,
  'Web Services': Globe,
  'Outils': Wrench,
  'Tools': Wrench,
  'Méthodologie': Layers,
  'Methodology': Layers,
};

const neonColors = [
  '#00D4FF', // cyan
  '#00FFC8', // teal
  '#39FF14', // green
  '#0080FF', // blue
  '#B829DD', // purple
];

export default function SkillConstellation({ lang }: SkillConstellationProps) {
  const skills = portfolioData.skills;

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D4FF]/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
            }}
          >
            <Code2 className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-[#00D4FF]">
              {lang === 'fr' ? 'Compétences' : 'Skills'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-neon">
              {lang === 'fr' ? 'Expertise Technique' : 'Technical Expertise'}
            </span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto">
            {lang === 'fr' 
              ? 'Un ensemble de compétences techniques acquises au fil des années et des projets.'
              : 'A set of technical skills acquired over the years and projects.'
            }
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => {
            const Icon = categoryIcons[skillGroup.category[lang]] || Code2;
            const color = neonColors[groupIndex % neonColors.length];

            return (
              <motion.div
                key={skillGroup.category[lang]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="group"
              >
                <div
                  className="relative p-6 rounded-2xl h-full transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: 'rgba(13, 17, 23, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${color}30`,
                  }}
                >
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 0 30px ${color}20`,
                    }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                      {skillGroup.category[lang]}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 text-sm rounded-full transition-all duration-300 cursor-default"
                        style={{
                          background: `${color}10`,
                          border: `1px solid ${color}20`,
                          color: `${color}CC`,
                        }}
                        whileHover={{
                          scale: 1.1,
                          background: `${color}25`,
                          borderColor: `${color}50`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${color} 50%)`,
                      borderTopRightRadius: '1rem',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '6+', label: lang === 'fr' ? 'Années d\'exp.' : 'Years exp.' },
            { value: '20+', label: lang === 'fr' ? 'Technologies' : 'Technologies' },
            { value: '15+', label: lang === 'fr' ? 'Projets' : 'Projects' },
            { value: '2', label: lang === 'fr' ? 'Certifications' : 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{
                background: 'rgba(13, 17, 23, 0.6)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
              }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-neon mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
