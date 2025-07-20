
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    { name: 'Home', path: '/', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Projects', path: '/#projects', action: () => scrollToSection('projects') },
    { name: 'Contact', path: '/#contact', action: () => scrollToSection('contact') },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="text-2xl font-bold text-foreground">
            Praborkar<span className="text-portfolio-indigo">.</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="font-medium transition-all duration-500 ease-in-out hover:text-portfolio-indigo text-muted-foreground"
            >
              {link.name}
            </button>
          ))}
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 ml-6 border-l border-border/50 pl-6">
            <a
              href="https://github.com/Praborkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-portfolio-indigo transition-all duration-500 ease-in-out hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prabor-kar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prabork@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className="block text-left font-medium transition-colors duration-200 text-muted-foreground hover:text-primary py-2"
              >
                {link.name}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
              <a
                href="https://github.com/Praborkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prabor-kar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:prabork@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
