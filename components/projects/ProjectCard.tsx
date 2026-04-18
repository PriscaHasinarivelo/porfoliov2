'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import GlowCard from '../ui/GlowCard';
import { Project } from '@/lib/projects-data';

interface ProjectCardProps {
  project: Project;
  lang: 'fr' | 'en';
  index: number;
}

export default function ProjectCard({ project, lang, index }: ProjectCardProps) {
  const glowColors = ['cyan', 'teal', 'green', 'blue', 'purple'] as const;
  const glowColor = glowColors[index % glowColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlowCard 
        className="h-full group" 
        glowColor={glowColor}
        hoverScale={1.03}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Image placeholder */}
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#0D1117] to-[#161B22] border border-[#00D4FF]/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold gradient-text-neon opacity-30">
                {project.title[lang].charAt(0)}
              </div>
            </div>
            
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
              style={{
                background: `rgba(0, 212, 255, 0.1)`,
                border: `1px solid rgba(0, 212, 255, 0.3)`,
                color: '#00D4FF',
              }}
            >
              {project.category}
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `rgba(57, 255, 20, 0.1)`,
                  border: `1px solid rgba(57, 255, 20, 0.3)`,
                  color: '#39FF14',
                }}
              >
                ★ Featured
              </div>
            )}
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
            {project.title[lang]}
          </h3>
          
          <p className="text-white/60 text-sm mb-4 line-clamp-3 flex-grow">
            {project.description[lang]}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-[#00D4FF]/10 text-[#00D4FF]/80 border border-[#00D4FF]/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-[#00FFC8]/10 text-[#00FFC8]/80 border border-[#00FFC8]/20">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: 'rgba(0, 212, 255, 0.1)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  color: '#00D4FF',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </motion.a>
            )}
            {project.codeUrl && (
              <motion.a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
