import React from 'react';
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, Heart, ArrowUp, 
  Terminal, Activity, Cpu, Code2, Globe, Radio
} from "lucide-react";

/**
 * System Status HUD: Modernized Footer
 * Features modular technical panes, perspective grids, and high-end typography.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 perspective-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-portfolio-indigo/40 to-transparent overflow-hidden">
         <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-portfolio-indigo"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: TERMINAL BRANDING */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-3xl font-black text-white tracking-tighter uppercase group cursor-default">
              Praborkar<span className="text-portfolio-indigo">.</span>
              <div className="flex items-center gap-2 mt-2 opacity-30 group-hover:opacity-100 transition-opacity">
                <Radio className="w-3 h-3 text-portfolio-indigo animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase">System Status: Active</span>
              </div>
            </div>
            <p className="text-xs text-white/30 font-mono leading-relaxed max-w-sm">
              // ENGINEERING A SEAMLESS HYBRID OF AESTHETICS AND PRODUCTION-GRADE PERFORMANCE. 
              ESTABLISHING THE NEXT GENERATION OF DIGITAL HARDWARE UI.
            </p>
          </div>

          {/* COLUMN 2: NAVIGATION NODES */}
          <div className="space-y-4">
             <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">Navigation</h4>
             <ul className="space-y-2">
                {['Home', 'Experience', 'Projects', 'Contact'].map((item) => (
                   <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-xs font-bold text-white/40 hover:text-portfolio-indigo hover:pl-2 transition-all flex items-center gap-2 group"
                      >
                         <div className="w-1 h-1 rounded-full bg-portfolio-indigo scale-0 group-hover:scale-100 transition-transform" />
                         {item.toUpperCase()}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* COLUMN 3: NEURAL HUB */}
          <div className="space-y-4">
             <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">Neural Links</h4>
             <div className="flex gap-4">
                {[
                   { icon: Github, link: "https://github.com/Praborkar" },
                   { icon: Linkedin, link: "https://www.linkedin.com/in/prabor-kar/" },
                   { icon: Mail, link: "mailto:praborkar@gmail.com" }
                ].map((social, i) => (
                   <motion.a
                      key={i}
                      whileHover={{ y: -5, scale: 1.1 }}
                      href={social.link}
                      target="_blank"
                      className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-portfolio-indigo hover:border-portfolio-indigo/40 hover:bg-portfolio-indigo/5 transition-all shadow-xl"
                   >
                      <social.icon className="w-5 h-5" />
                   </motion.a>
                ))}
             </div>
             <button 
                onClick={scrollToTop}
                className="mt-4 flex items-center gap-2 text-[9px] font-black text-white/30 hover:text-white uppercase tracking-widest transition-colors group"
             >
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" /> 
                System Reset (Top)
             </button>
          </div>

        </div>

        {/* BOTTOM FLOOR: LEGAL & STATUS */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              <div className="px-2 py-1 rounded bg-white/[0.03] border border-white/5 font-mono text-[9px] text-white/40 uppercase">
                 v4.0.2 Stable
              </div>
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                © {currentYear} Praborkar. All rights reserved.
              </p>
           </div>
           
           <div className="flex items-center gap-2">
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] font-mono">Handcrafted with</span>
              <Heart className="w-3 h-3 text-portfolio-indigo animate-pulse" />
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] font-mono">by Praborkar</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
