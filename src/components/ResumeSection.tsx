import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Database, Globe } from 'lucide-react';

const ResumeSection = () => {
  const keyHighlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js"
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Node.js, Express.js, MongoDB, MySQL, FastAPI"
    },
    {
      icon: Globe,
      title: "Full Stack Projects",
      description: "6+ complete applications from concept to deployment"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resume & <span className="text-portfolio-indigo">Experience</span>
          </h2>
          <p className="text-xl text-portfolio-light max-w-3xl mx-auto mb-12">
            Full-stack developer with expertise in modern web technologies and a passion for creating scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Key Highlights Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Key Expertise</h3>
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-portfolio-navy/20 rounded-lg border border-portfolio-indigo/20"
              >
                <div className="bg-portfolio-indigo/20 p-3 rounded-lg">
                  <highlight.icon className="w-6 h-6 text-portfolio-indigo" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-portfolio-light">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume View Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-portfolio-navy/20 rounded-2xl p-12 border border-portfolio-indigo/20">
              <div className="mb-8">
                <div className="w-20 h-20 bg-portfolio-indigo/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-10 h-10 text-portfolio-indigo" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  View My Resume
                </h3>
                <p className="text-portfolio-light mb-8">
                  Get a comprehensive overview of my skills, experience, and projects in a detailed PDF format.
                </p>
              </div>

              <motion.a
                href="https://drive.google.com/file/d/1qgNGsziQf8avnaCtyM1WKlz9nTkWjS1G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-portfolio-indigo hover:bg-portfolio-sky text-white px-8 py-4 rounded-lg transition-all duration-500 ease-in-out font-semibold text-lg shadow-lg hover:shadow-portfolio-indigo/25"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.a>

              <p className="text-portfolio-light text-sm mt-4">
                PDF • 2.3 MB • Updated December 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
