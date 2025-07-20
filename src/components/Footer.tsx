
import React from 'react';
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-light/5" style={{ backgroundColor: 'hsl(199 89% 48% / 0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2" style={{ color: 'hsl(210 100% 70%)' }}>
              Praborkar<span className="text-portfolio-indigo">.</span>
            </div>
            <p className="text-sm text-blue-300">
              © {currentYear} Built with <Heart className="inline w-4 h-4 text-red-500" /> by Praborkar
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Praborkar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-portfolio-indigo/10 rounded-full flex items-center justify-center text-portfolio-navy hover:text-portfolio-indigo hover:bg-portfolio-indigo/20 transition-all duration-500 ease-in-out"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/prabor-kar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-portfolio-indigo/10 rounded-full flex items-center justify-center text-portfolio-navy hover:text-portfolio-indigo hover:bg-portfolio-indigo/20 transition-all duration-500 ease-in-out"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:praborkar@gmail.com"
              className="w-12 h-12 bg-portfolio-indigo/10 rounded-full flex items-center justify-center text-portfolio-navy hover:text-portfolio-indigo hover:bg-portfolio-indigo/20 transition-all duration-500 ease-in-out"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-portfolio-indigo/20 text-center">
          <p className="text-sm text-blue-300">
            Web Developer specializing in React, TypeScript, and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
