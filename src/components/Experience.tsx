import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">/ Career Path</span>
            <h2 className="text-[28px] sm:text-4xl md:text-7xl font-black text-white leading-none uppercase italic">
              Professional <br />
              <span className="text-gradient">Evolution.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-[32px] md:rounded-[40px] p-6 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-primary/10 transition-colors" />
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-12">
                  <div className="space-y-6 lg:max-w-md">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] md:text-xs font-black uppercase tracking-widest">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        <Briefcase size={20} />
                      </span>
                      {exp.role}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex gap-4 group/item">
                          <ChevronRight size={18} className="text-brand-primary shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                          <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
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

