import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">/ Selected Work</span>
            <h2 className="text-3xl md:text-8xl font-black text-white leading-none">
              BUILDING <br />
              <span className="text-gradient">IMPACTFUL</span> <br />
              SOLUTIONS.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {RESUME_DATA.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative glass-card rounded-[32px] md:rounded-[40px] overflow-hidden p-6 md:p-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div>
                    <span className="text-brand-secondary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all"
                  >
                    <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                  </motion.div>
                </div>
                
                <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-brand-primary font-mono text-sm">{project.stats}</span>
                  <div className="flex gap-4">
                    <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

