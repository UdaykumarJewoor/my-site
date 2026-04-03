import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-primary/30">
      <div className="noise" />
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-20 border-t border-white/5 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
            <div className="text-center md:text-left">
              <div className="text-2xl font-black mb-4 tracking-tighter">UJ<span className="text-brand-primary">.</span></div>
              <p className="text-slate-500 max-w-xs mx-auto md:mx-0">Building the future of software with precision and passion.</p>
            </div>
            
            <div className="flex gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Navigation</span>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</a>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm">Projects</a>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Social</span>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Udaykumar Jewoor — Crafted with Passion
          </div>
        </div>
      </footer>
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_50%)]" />
      </div>
    </div>
  );
}

