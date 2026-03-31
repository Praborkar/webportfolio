
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Cpu, Terminal as TerminalIcon } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', section: 'top', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Projects', section: 'projects', action: () => scrollToSection('projects') },
    { name: 'Contact', section: 'contact', action: () => scrollToSection('contact') },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
        className={cn(
          'pointer-events-auto transition-all duration-700 ease-in-out px-4 py-2 rounded-full border border-white/5 relative',
          scrolled 
            ? 'bg-portfolio-navy/20 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10' 
            : 'bg-transparent'
        )}
      >
        {/* Optical Glow Layer */}
        <div className="absolute inset-0 rounded-full bg-portfolio-indigo/5 blur-xl pointer-none" />
        
        <div className="flex items-center gap-8 relative z-10 px-4">
          <NavLink to="/" className="flex items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="text-sm font-black text-white/90 tracking-tight flex items-center gap-1.5 uppercase font-mono">
              <span className="opacity-40">[</span>
              Praborkar
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="text-portfolio-indigo relative"
              >
                .
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-portfolio-indigo/40 blur-sm rounded-full" />
              </motion.span>
              <span className="opacity-40">]</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="relative px-6 py-2 group overflow-hidden rounded-lg transition-all"
              >
                {/* Tactical Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-portfolio-indigo/0 group-hover:bg-portfolio-indigo/5 transition-colors duration-300"
                />
                <motion.div 
                  initial={false}
                  whileHover={{ top: ['0%', '100%'] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-portfolio-indigo/30 opacity-0 group-hover:opacity-100"
                />
                
                <span className="relative text-[10px] font-black tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[8px] text-portfolio-indigo">0xAD</span>
                  {link.name}
                </span>
              </button>
            ))}
            
            {/* Communication Node Hub */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/5">
              {[
                { icon: <Github size={14} />, href: "https://github.com/Praborkar" },
                { icon: <Linkedin size={14} />, href: "https://www.linkedin.com/in/prabor-kar/" },
                { icon: <Mail size={14} />, href: "mailto:prabork@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-white/30 hover:text-portfolio-indigo transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white/40 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Orbit Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 15, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-full left-0 right-0 p-4"
            >
              <div className="bg-portfolio-navy/40 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                {/* Circuit Grid Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />
                
                <div className="flex flex-col gap-6 relative z-10">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        link.action();
                        setIsOpen(false);
                      }}
                      className="text-left text-lg font-black uppercase tracking-widest text-white/40 hover:text-portfolio-indigo transition-all flex items-center justify-between group"
                    >
                      {link.name}
                      <TerminalIcon size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                  
                  <div className="pt-8 border-t border-white/10 flex gap-8 justify-center">
                    <Github className="text-white/40 hover:text-portfolio-indigo cursor-pointer" />
                    <Linkedin className="text-white/40 hover:text-portfolio-indigo cursor-pointer" />
                    <Mail className="text-white/40 hover:text-portfolio-indigo cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
